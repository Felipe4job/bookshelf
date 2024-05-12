import fetchApi, { FetchApiResponse, FetchError } from '../fetchApi';
import { GetBookshelfResProps, PostBookshelfEntryProps, PutBookshelfEntryProps } from './types';

const basePath = '/api/v1/bookshelfs';

export const crudBookshelfs = {
  getAllMe: async () => {

    return await fetchApi({
      path: basePath,
      method: 'GET',
    })
      .then((res: FetchApiResponse) => {
        return res.data as GetBookshelfResProps[];
      })
      .catch((error: FetchError) => {
        throw new FetchError(error.message, error.code);
      });
  },
  getOneById: async (bookshelfId: string) => {

    return await fetchApi({
      path: basePath + '/' + bookshelfId,
      method: 'GET',
    })
      .then((res: FetchApiResponse) => {
        return res.data as GetBookshelfResProps;
      })
      .catch((error: FetchError) => {
        throw new FetchError(error.message, error.code);
      });
  },
  post: async (data: PostBookshelfEntryProps) => {

    return await fetchApi({
      path: basePath,
      method: 'POST',
      options: {
        body: JSON.stringify(data)
      }
    })
      .then((res: FetchApiResponse) => {
        return res.data as GetBookshelfResProps;
      })
      .catch((error: FetchError) => {
        throw new FetchError(error.message, error.code);
      });
  },
  put: async (data: PutBookshelfEntryProps) => {

    return await fetchApi({
      path: basePath,
      method: 'PATCH',
      options: {
        body: JSON.stringify(data)
      }
    })
      .then((res: FetchApiResponse) => {
        return res.data as GetBookshelfResProps;
      })
      .catch((error: FetchError) => {
        throw new FetchError(error.message, error.code);
      });
  },
  delete: async (bookshelfId: string) => {

    return await fetchApi({
      path: basePath + '/' + bookshelfId,
      method: 'DELETE',
    })
      .catch((error: FetchError) => {
        throw new FetchError(error.message, error.code);
      });
  }
};