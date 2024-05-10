import fetchApi, { FetchApiResponse, FetchError } from '../fetchApi';
import { GetBookReviewsResProps, PostBookReviewEntryProps, PutBookReviewEntryProps } from './types';

const basePath = '/api/v1/books/reviews';

export const crudBooks = {
  getAllBookReviews: async (bookId: string) => {

    return await fetchApi({
      path: basePath + '/' + bookId,
      method: 'GET',
    })
      .then((res: FetchApiResponse) => {
        return res.data as GetBookReviewsResProps[];
      })
      .catch((error: FetchError) => {
        throw new FetchError(error.message, error.code);
      });
  },
  getOneBookReviewById: async (bookId: string, reviewId: string) => {

    return await fetchApi({
      path: basePath + '/' + bookId + '/' + reviewId,
      method: 'GET',
    })
      .then((res: FetchApiResponse) => {
        return res.data as GetBookReviewsResProps;
      })
      .catch((error: FetchError) => {
        throw new FetchError(error.message, error.code);
      });
  },
  postBookReview: async (data: PostBookReviewEntryProps) => {

    return await fetchApi({
      path: basePath + '/' + 'reviews',
      method: 'POST',
      options: {
        body: JSON.stringify(data)
      }
    })
      .then((res: FetchApiResponse) => {
        return res.data as GetBookReviewsResProps;
      })
      .catch((error: FetchError) => {
        throw new FetchError(error.message, error.code);
      });
  },
  putBook: async (data: PutBookReviewEntryProps) => {

    return await fetchApi({
      path: basePath,
      method: 'PATCH',
      options: {
        body: JSON.stringify(data)
      }
    })
      .then((res: FetchApiResponse) => {
        return res.data as GetBookReviewsResProps;
      })
      .catch((error: FetchError) => {
        throw new FetchError(error.message, error.code);
      });
  },
  deleteBook: async (bookId: string, reviewId: string) => {

    return await fetchApi({
      path: basePath + '/' + bookId + '/' + reviewId,
      method: 'DELETE',
    })
      .catch((error: FetchError) => {
        throw new FetchError(error.message, error.code);
      });
  }
};