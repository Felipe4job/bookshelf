import { errorHandler } from '@/helpers/server/errorHandler';
import { execMiddleware } from '@/helpers/server/middleware';
import { IUser } from '@/models/User.model';
import UserService from '@/services/User.service';

export const POST = execMiddleware(
  async (req: Request) => {
    const data = await req.json() as unknown as IUser;
    const response = await UserService.create(data);

    return Response.json({ id: response._id }, { status: 200 });   
  }
);

export const PATCH = execMiddleware(
  async (req: Request) => {

    const data = await req.json() as unknown as IUser;

    if(data._id) {
      const response = await UserService.update(data._id, data);
      return Response.json({ id: response._id }, { status: 200 });
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
      return Response.json({ id: response.deletedAt }, { status: 200 });
    }else return errorHandler({
      msg: 'ID do usuário não enviado',
      code: 'Id not send'
    });  
  }
);