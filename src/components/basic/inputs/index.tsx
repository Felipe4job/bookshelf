import { DateType } from './date';
import { FileType } from './file';
import { NumberType } from './number';
import { PasswordType } from './pass';
import { TextArea } from './textArea';
import { TextOrEmailType } from './textEmail';


export const InputEst = {
  number: NumberType,
  textOrEmail: TextOrEmailType,
  date: DateType,
  textArea: TextArea,
  file: FileType,
  pass: PasswordType
};