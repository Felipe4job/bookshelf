import fetchApi, { FetchApiResponse, FetchError } from '../fetchApi';
import { GetGoogleBooksResProps } from './types';

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
  }
};