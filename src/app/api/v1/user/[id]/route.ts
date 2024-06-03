import { errorHandler } from '@/helpers/server/errorHandler';
import { execMiddleware } from '@/helpers/server/middleware';
import UserService from '@/services/User.service';

type Params = {
  id: string
}

export const GET = execMiddleware(
  async (req: Request, context: { params: Params }) => {
  
    const uuid = context.params.id;
  
    if(uuid) {
      const response = await UserService.getById(uuid);
      return Response.json(response, { status: 200 });
    }else return errorHandler({ msg: 'Id do usuário não enviado', code: 'Id not send' });
  }  
);