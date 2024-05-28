import { execMiddleware } from '@/helpers/server/middleware';
import { IUser } from '@/models/User.model';
import UserService from '@/services/User.service';

export const POST = execMiddleware(
  async (req: Request) => {

    const data = await req.json() as unknown as IUser;

    try{
      const response = await UserService.create(data);
      return Response.json({ id: response._id }, { status: 200 });
    }catch (e: any) {
      return Response.json({ Msg: e.message }, { status: 400 });
    }    
  }
);