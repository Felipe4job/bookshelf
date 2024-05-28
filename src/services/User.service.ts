import { IUser, UserModel } from '@/models/User.model';
import BaseService from './Base.service';

class UserService extends BaseService<IUser, IUser> {
  constructor () {
    super(UserModel);
  }
}

export default (new UserService());