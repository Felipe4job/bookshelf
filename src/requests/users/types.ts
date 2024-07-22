export interface GetUserResProps {
  _id: string;
  name: string;
  userName: string;
  email: string;
  phone?: string;
  photo?: string;
  lastAcess?: Date;
  provider: 'credentials' | 'google' | 'apple';
}

export interface PostUserEntryProps {
  name: string;
  password?: string;
  userName: string;
  email: string;
  phone?: string;
  photo?: string;
  provider: 'credentials' | 'google' | 'apple';
}

export interface PutUserEntryProps {
  name?: string;
  password?: string;
  userName?: string;
  email?: string;
  phone?: string;
  photo?: string;
}
