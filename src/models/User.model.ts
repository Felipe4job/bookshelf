import { Schema, model, models } from 'mongoose';
import bcrypt from 'bcrypt';
import { IBase, base } from './Base.model';

export interface IUser extends IBase {
  name: string;
  password?: string;
  userName: string;
  email: string;
  provider: 'credentials' | 'google' | 'apple';
  phone?: string;
  photo?: string;
  lastAcess?: Date;
  comparePassword(candidatePassword: string): Promise<boolean>
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  password: { type: String },
  userName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  photo: { type: String },
  provider: { type: String, required: true, default: 'credentials' },
  lastAcess: { type: Date },
});

userSchema.pre('save', async function (this: IUser) {
  if(this.password) {
    if (await this.comparePassword(this.password + process.env.PEPPER)) return;
    else {
      const salt = await bcrypt.genSalt(12);
      this.password = await bcrypt.hash(this.password + process.env.PEPPER, salt);
    }
  }  
});

// userSchema.pre('find', function (this:any) {
//   this.select('-password');
// });

userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  return await bcrypt.compare(candidatePassword + process.env.PEPPER, this.password);
};

userSchema.add(base);

export const UserModel = models.User || model('User', userSchema);
