export interface GetBookReviewsResProps {
  uuid: string;
  book: {
    uuid: string;
    title: string
  };
  text: string;
  createdAt: string;
  updatedAt: string;
}

export interface PostBookReviewEntryProps {
  bookId: string;
  text: string;
}

export interface PutBookReviewEntryProps {
  bookId: string;
  reviewId: string;
  text: string;
}