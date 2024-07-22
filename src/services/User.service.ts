import { IUser, UserModel } from '@/models/User.model';
import BaseService from './Base.service';
import { errorHandler } from '@/helpers/server/errorHandler';

class UserService extends BaseService<IUser, IUser> {
  constructor () {
    super(UserModel);
  }

  async getByEmailOrUser (emailOrUser: string): Promise<IUser | null> {
    
    try{
      const user: IUser = await UserModel.findOne({
        $or: [
          { email: emailOrUser },
          { userName: emailOrUser }
        ]
      }).exec();

      if (user)
        return user;
      else return null;      
      
    }catch(error: any) {
      const message = error.message;

      throw errorHandler(
        {
          msg: message,
          code: 'Bad Request'
        }
      );
    }
  }
}

export default (new UserService());