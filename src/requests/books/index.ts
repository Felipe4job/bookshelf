import fetchApi, { FetchApiResponse, FetchError } from '../fetchApi';
import { GetBooksResProps, GetGoogleBooksResProps, PostBookEntryProps, PutBookEntryProps } from './types';

const basePath = '/api/v1/books';

export const crudBooks = {
  getGoogleBooks: async (title: string) => {

    return await fetchApi({
      path: `/books/v1/volumes?q=${title}&printType=books&orderBy=relevance&maxResults=20&key=${process.env.NEXT_PUBLIC_API_KEY_GOOGLE_BOOKS}`,
      method: 'GET',
      gooleBooks: true
    })
      .then((res: FetchApiResponse) => {
        return res.data.items as GetGoogleBooksResProps[];
      })
      .catch((error: FetchError) => {
        throw new FetchError(error.message, error.code);
      });
  },
  getAllMe: async (bookshelfId: string) => {

    return await fetchApi({
      path: basePath + '/' + bookshelfId,
      method: 'GET',
    })
      .then((res: FetchApiResponse) => {
        return res.data as GetBooksResProps[];
      })
      .catch((error: FetchError) => {
        throw new FetchError(error.message, error.code);
      });
  },
  getOneById: async (bookshelfId: string, bookId: string) => {

    return await fetchApi({
      path: basePath + '/' + bookshelfId + '/' + bookId,
      method: 'GET',
    })
      .then((res: FetchApiResponse) => {
        return res.data as GetBooksResProps;
      })
      .catch((error: FetchError) => {
        throw new FetchError(error.message, error.code);
      });
  },
  post: async (data: PostBookEntryProps) => {

    return await fetchApi({
      path: basePath,
      method: 'POST',
      options: {
        body: JSON.stringify(data)
      }
    })
      .then((res: FetchApiResponse) => {
        return res.data as GetBooksResProps;
      })
      .catch((error: FetchError) => {
        throw new FetchError(error.message, error.code);
      });
  },
  put: async (data: PutBookEntryProps) => {

    return await fetchApi({
      path: basePath,
      method: 'PATCH',
      options: {
        body: JSON.stringify(data)
      }
    })
      .then((res: FetchApiResponse) => {
        return res.data as GetBooksResProps;
      })
      .catch((error: FetchError) => {
        throw new FetchError(error.message, error.code);
      });
  },
  delete: async (bookId: string) => {

    return await fetchApi({
      path: basePath + '/' + bookId,
      method: 'DELETE',
    })
      .catch((error: FetchError) => {
        throw new FetchError(error.message, error.code);
      });
  }
};