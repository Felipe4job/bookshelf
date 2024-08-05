import { errorHandler } from '@/helpers/server/errorHandler';
import { execMiddleware } from '@/helpers/server/middleware';
import { user } from '@/libs/auth';
import { IUser } from '@/models/User.model';
import UserService from '@/services/User.service';

export const POST = execMiddleware(
  async (req: Request) => {
    const data = await req.json() as unknown as IUser;
    const response = await UserService.create(data);

    if(response)
      return Response.json({ id: response._id }, { status: 200 });   
  }
);

export const PATCH = execMiddleware(
  async (req: Request, currentUser: user) => {

    const data = await req.json() as unknown as IUser;

    if(currentUser.id) {
      const response = await UserService.update(currentUser.id, data);

      if(response)
        return Response.json({ id: response._id }, { status: 200 });
      else errorHandler({
        msg: 'Usuário não encontrado #' + data._id,
        code: 'Not Found'
      });

    }else return errorHandler({
      msg: 'ID do usuário não enviado',
      code: 'Id not send'
    });  
  }
);

export const DELETE = execMiddleware(
  async (req: Request) => {

    const data = await req.json() as unknown as IUser;

    if(data._id) {
      const response = await UserService.update(data._id, data);
        
      if(response)
        return Response.json({ deletedAt: response.deletedAt }, { status: 200 });

    }else return errorHandler({
      msg: 'ID do usuário não enviado',
      code: 'Id not send'
    });  
  }
);