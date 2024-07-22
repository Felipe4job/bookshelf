import { errorHandler } from '@/helpers/server/errorHandler';
import { execMiddleware } from '@/helpers/server/middleware';
import UserService from '@/services/User.service';

export const GET = execMiddleware(
  async (req: Request) => {
    let authorization = req.headers.get('authorization');

    if(authorization) {
      authorization = authorization.split(' ')[1];

      const [ emailOrUser, password ] = Buffer.from(authorization, 'base64').toString('utf-8').split(':');

      const user = await UserService.getByEmailOrUser(emailOrUser);

      if(user && await user.comparePassword(password))
        return Response.json({ 
          id: user._id, 
          name: user.name, 
          email: user.email, 
          active: user.active,
          photo: user.photo 
        }, { status: 200 });
      else errorHandler(
        {
          code: 'Not Found',
          msg: 'Usuário ou senha inválidos'
        }
      );
    }else errorHandler(
      {
        code: 'Bad Request',
        msg: 'usuário e senha não enviados'
      }
    );    
  }  
);