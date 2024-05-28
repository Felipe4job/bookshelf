import fetchApi, { FetchApiResponse, FetchError } from '../fetchApi';
import { GetUserResProps, PostUserEntryProps } from './types';

const basePathOne = '/api/v1/user';
const basePathAll = '/api/v1/users';

export const crudUsers = {
  getAll: async () => {

    return await fetchApi({
      path: basePathAll,
      method: 'GET',
    })
      .then((res: FetchApiResponse) => {
        return res.data as GetUserResProps[];
      })
      .catch((error: FetchError) => {
        throw new FetchError(error.message, error.code);
      });
  },
  // getOneById: async (bookshelfId: string) => {

  //   return await fetchApi({
  //     path: basePath + '/' + bookshelfId,
  //     method: 'GET',
  //   })
  //     .then((res: FetchApiResponse) => {
  //       return res.data as GetBookshelfResProps;
  //     })
  //     .catch((error: FetchError) => {
  //       throw new FetchError(error.message, error.code);
  //     });
  // },
  post: async (data: PostUserEntryProps) => {
    return await fetchApi({
      path: basePathOne,
      method: 'POST',
      options: {
        body: JSON.stringify(data)
      }
    })
      .then((res: FetchApiResponse) => {
        return res.data as GetUserResProps;
      })
      .catch((error: FetchError) => {
        throw new FetchError(error.message, error.code);
      });
  },
  // put: async (data: PutBookshelfEntryProps) => {

  //   return await fetchApi({
  //     path: basePath,
  //     method: 'PATCH',
  //     options: {
  //       body: JSON.stringify(data)
  //     }
  //   })
  //     .then((res: FetchApiResponse) => {
  //       return res.data as GetBookshelfResProps;
  //     })
  //     .catch((error: FetchError) => {
  //       throw new FetchError(error.message, error.code);
  //     });
  // },
  // delete: async (bookshelfId: string) => {

  //   return await fetchApi({
  //     path: basePath + '/' + bookshelfId,
  //     method: 'DELETE',
  //   })
  //     .catch((error: FetchError) => {
  //       throw new FetchError(error.message, error.code);
  //     });
  // }
};