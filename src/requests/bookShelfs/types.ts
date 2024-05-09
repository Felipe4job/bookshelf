export interface GetBookshelfResProps {
  uuid: string;
  title: string;
  description?: string;
  createdDate: string;
  updatedDate: string;
}

export interface PostBookshelfEntryProps {
  title: string;
  description?: string;
}

export interface PutBookshelfEntryProps {
  uuid: string;
  title?: string;
  description?: string;
}