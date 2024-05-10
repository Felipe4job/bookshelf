import fetchApi, { FetchApiResponse, FetchError } from '../fetchApi';
import { GetCharacterResProps, PostCharacterProps, PutCharacterProps } from './types';

const basePath = '/api/v1/books/book/';

export const crudBookCharacter = {
  getAllMyCharacters: async () => {

    return await fetchApi({
      path: basePath,
      method: 'GET',
    })
      .then((res: FetchApiResponse) => {
        return res.data as GetCharacterResProps[];
      })
      .catch((error: FetchError) => {
        throw new FetchError(error.message, error.code);
      });
  },
  getAllBookCharacters: async (bookId: string) => {

    return await fetchApi({
      path: basePath + '/' + bookId,
      method: 'GET',
    })
      .then((res: FetchApiResponse) => {
        return res.data as GetCharacterResProps[];
      })
      .catch((error: FetchError) => {
        throw new FetchError(error.message, error.code);
      });
  },
  getOneCharacterById: async (bookId: string, characterId: string) => {

    return await fetchApi({
      path: basePath + '/' + bookId + '/' + characterId,
      method: 'GET',
    })
      .then((res: FetchApiResponse) => {
        return res.data as GetCharacterResProps;
      })
      .catch((error: FetchError) => {
        throw new FetchError(error.message, error.code);
      });
  },
  postBook: async (data: PostCharacterProps) => {

    return await fetchApi({
      path: basePath,
      method: 'POST',
      options: {
        body: JSON.stringify(data)
      }
    })
      .then((res: FetchApiResponse) => {
        return res.data as GetCharacterResProps;
      })
      .catch((error: FetchError) => {
        throw new FetchError(error.message, error.code);
      });
  },
  putBook: async (data: PutCharacterProps) => {

    return await fetchApi({
      path: basePath,
      method: 'PATCH',
      options: {
        body: JSON.stringify(data)
      }
    })
      .then((res: FetchApiResponse) => {
        return res.data as GetCharacterResProps;
      })
      .catch((error: FetchError) => {
        throw new FetchError(error.message, error.code);
      });
  },
  deleteBook: async (bookshelfId: string, bookId: string) => {

    return await fetchApi({
      path: basePath + '/' + bookshelfId + '/' + bookId,
      method: 'DELETE',
    })
      .catch((error: FetchError) => {
        throw new FetchError(error.message, error.code);
      });
  }
};