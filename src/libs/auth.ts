import { userGetVerifyPass } from '@/requests/users';
import { AuthOptions, getServerSession } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { reqUseServer } from './reqUseServer';


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
    async signIn () {

      // possibilidades de parâmetros user, account, profile, email, credentials
      // o acount retorna {providerAccountId: undefined, type: 'credentials', provider: 'credentials'}
      // profile e email devem ser para autenticação de Oauth
      // Quando dá erro no esse callback não é executado

      const isAllowedToSignIn = true;

      if (isAllowedToSignIn) {
        return true;
      } else {
        // Return false to display a default error message
        return false;
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
    async jwt ({ token, account, profile }) {
      console.log('jwtjwtjwtjwt', token, account, profile);
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session ({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      console.log('$$$$$', session, token, user);
      return session;
    }
  }
};

const  getSession = async () => await getServerSession (authOptions); 

export { authOptions, getSession };