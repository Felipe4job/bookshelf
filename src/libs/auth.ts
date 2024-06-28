import { AuthOptions, getServerSession } from 'next-auth';


const  authOptions : AuthOptions = {
  providers : [],
  pages: {
    signIn: '/login',
    signOut: '/logout',
    newUser: '/register'
  } 
};

/** 
* Função auxiliar para obter a sessão no servidor sem ter que importar o objeto authOptions todas as vezes 
* @returns O objeto de sessão ou nulo 
*/

const  getSession = ( ) => getServerSession (authOptions); 

export { authOptions, getSession };