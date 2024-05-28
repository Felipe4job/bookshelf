export interface GetUserResProps {
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
