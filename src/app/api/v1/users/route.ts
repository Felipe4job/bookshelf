import { execMiddleware } from '@/helpers/server/middleware';
import UserService from '@/services/User.service';

export const GET = execMiddleware(
  async () => {

    try{
      const response = await UserService.getAll();
      return Response.json({ user: response }, { status: 200 });
    }catch (e: any) {
      return Response.json({ Msg: e.message }, { status: 400 });
    }    
  }
);