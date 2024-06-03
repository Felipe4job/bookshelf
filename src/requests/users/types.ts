export interface GetUserResProps {
  _id: string;
  name: string;
  userName: string;
  email: string;
  phone?: string;
  photo?: string;
  lastAcess?: Date;
}

export interface PostUserEntryProps {
  name: string;
  password: string;
  userName: string;
  email: string;
  phone?: string;
  photo?: string;
}

export interface PutUserEntryProps {
  name?: string;
  password?: string;
  userName?: string;
  email?: string;
  phone?: string;
  photo?: string;
}
