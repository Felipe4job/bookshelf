import { execMiddleware } from '@/helpers/server/middleware';
import { IUser } from '@/models/User.model';
import UserService from '@/services/User.service';

export const POST = execMiddleware(
  async (req: Request) => {
    const data = await req.json() as unknown as IUser;
    let userRes;
    const user = await UserService.getByEmailOrUser(data.email);

    user ? userRes = user : userRes = await UserService.create(data);

    return Response.json({ 
      id: userRes._id, 
      name: userRes.name, 
      email: userRes.email, 
      active: userRes.active, 
      photo: userRes.photo,
      provider: userRes.provider,
      userName: userRes.userName 
    }, { status: 200 });
  }    
);