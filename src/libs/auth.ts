import { userGetVerifyPass } from '@/requests/users';
import { AuthOptions, getServerSession } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { reqUseServer } from './reqUseServer';
import { redisConnect } from '@/helpers/server/db.redis';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const jwt = require('jsonwebtoken');

declare module 'next-auth' {
	interface Session {
		user: {
			id: string
			email: string
			name: string
		}
	}
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
    })
  ],
  callbacks: {
    // async signIn ({ user }) {
    //   // possibilidades de parâmetros user, account, profile, email, credentials
    //   // o acount retorna {providerAccountId: undefined, type: 'credentials', provider: 'credentials'}
    //   // profile e email devem ser para autenticação de Oauth
    //   // Quando dá erro no esse callback não é executado      

    //   const isAllowedToSignIn = true;

    //   if (isAllowedToSignIn) {
    //     return true;
    //   } else {
    //     // Return false to display a default error message
    //     return false;
    //     // Or you can return a URL to redirect to:
    //     // return '/unauthorized'
    //   }
    // },
    async jwt ({ token, account, profile, user }) {
      // Persist the OAuth access_token to the token right after signin

      const redis = await redisConnect;
      const sessionRedis: redisSession | null = JSON.parse(await redis.get(user.id));
      let refreshToken = null;

      if(!sessionRedis) {
        const tokenNew = jwt.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: '12h' });
        refreshToken = jwt.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: '30m' });

        await redis.set(user.id, JSON.stringify({
          token: tokenNew,
          refreshToken: refreshToken,
          stayConnected: false
        }));        
      }

      if(user)
        token.user = user;

      if(refreshToken)
        token.accessToken = refreshToken;

      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session ({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      
      if(token)
        session.user = token.user as any;

      return session;
    },    
  }
};

const  getSession = async () => await getServerSession (authOptions); 

export { authOptions, getSession };