import { userGetVerifyPass, userPostGoogleLogin } from '@/requests/users';
import { AuthOptions, getServerSession } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { reqUseServer } from './reqUseServer';
import { redisConnect } from '@/helpers/server/db.redis';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const jwt = require('jsonwebtoken');

declare module 'next-auth' {
	interface Session {
		user: user;
    error?: string;
	}
}

export interface user {
  id: string;
  email: string;
  name: string;
  photo: string;
  active: boolean;
}

interface redisSession {
  token: string;
  refreshToken: string;
  stayConnected: boolean;
}


const  authOptions : AuthOptions = {
  pages: {
    signIn: '/login',
    signOut: '/logout',
    newUser: '/register'
  },
  session: {
    strategy: 'jwt',
  },
  providers : [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        emailOrUser: { label: 'emailOrUser', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize (credentials) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        let user = null;

        if(credentials) {
          const { emailOrUser, password } = credentials;

          await reqUseServer(userGetVerifyPass, { emailOrUser, password })
            .then(res => user = res)
            .catch(err => console.error(err));
        }

        return user;
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''
    })
  ],
  callbacks: {
    async jwt ({ token, account, user }) {

      const redis = await redisConnect;

      // Login
      // Definir regras para logins em mais de um navegador, como se comportar.

      if (account && user) {
        console.info('This is the first login and the user is here together with the account ', user, account);

        if(account.provider === 'google') {
          const newUser = await reqUseServer(userPostGoogleLogin, { name: user.name || '', email: user.email || '', photo: user.image || '' });
          user = newUser;
        }

        token.accessToken = jwt.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: '30m' });
        token.user = user;

        await redis.set(user.id, JSON.stringify({
          token: jwt.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: '12h' }),
          refreshToken: token.accessToken,
          stayConnected: false
        }));
      }

      // Subsequents calls

      if(token.accessToken) {
        const newUser = token.user as user;

        console.info('This is a request that login has already been made ', token);  
        const sessionRedis: redisSession = await JSON.parse(await redis.get(newUser.id));  

        try {                 
          if(!sessionRedis) throw new Error('session not found');

          if(token.accessToken !== sessionRedis.refreshToken) throw new Error('token sent different than expected');          

          jwt.verify(sessionRedis.token, process.env.SECRET_KEY);
          
          try {
            jwt.verify(sessionRedis.refreshToken, process.env.SECRET_KEY);
          }catch(e: any) {
            if (e.name === 'TokenExpiredError') {
              token.accessToken = jwt.sign({ id: newUser.id }, process.env.SECRET_KEY, { expiresIn: '30m' });

              await redis.set(newUser.id, JSON.stringify({
                token: sessionRedis.token,
                refreshToken: token.accessToken,
                stayConnected: sessionRedis.stayConnected
              }));             

            }else throw new Error('something wrong with accessToken >>> ', e.message);
          }
        }catch (error: any) {
          if (error.name === 'TokenExpiredError') {
            if(sessionRedis.stayConnected) {
              token.accessToken = jwt.sign({ id: newUser.id }, process.env.SECRET_KEY, { expiresIn: '30m' });

              await redis.set(newUser.id, JSON.stringify({
                token: jwt.sign({ id: newUser.id }, process.env.SECRET_KEY, { expiresIn: '12h' }),
                refreshToken: token.accessToken,
                stayConnected: true
              }));
            } else {
              token.error = 'TokenExpiredError';
            }
          }else token.error = error.message;

          await redis.del(newUser.id);
        }
      }

      if (account && account.type !== 'credentials') {
        token.account = account;
      }

      // account: {
      //   providerAccountId: '668447d7b96b979181d37e3b',
      //   type: 'credentials',
      //   provider: 'credentials'
      // }

      return token;
    },
    async session ({ session, token }) {
      
      if(token)
        if (token?.error) {
          session.error = token.error as string;
        }else {
          session.user = token.user as user;
        }

      return session;
    },    
  },
  events: {
    async signOut (message) {
      const redis = await redisConnect;
      if (message.token) {
        const userToken = message.token.user as user;
        await redis.del(userToken.id);
      }
    }
  }
};

const  getSession = async () => await getServerSession (authOptions); 

export { authOptions, getSession };