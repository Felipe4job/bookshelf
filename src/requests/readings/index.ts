import fetchApi, { FetchApiResponse, FetchError } from '../fetchApi';
import { GetReadingsResProps, PostReadingEntryProps, PutReadingEntryProps } from './types';

const basePath = '/api/v1/readings';

export const crudReadings = {
  getAllMyReadings: async () => {

    return await fetchApi({
      path: basePath,
      method: 'GET',
    })
      .then((res: FetchApiResponse) => {
        return res.data as GetReadingsResProps[];
      })
      .catch((error: FetchError) => {
        throw new FetchError(error.message, error.code);
      });
  },
  getAllBookReadings: async (bookId: string) => {

    return await fetchApi({
      path: basePath + '/book/' + bookId,
      method: 'GET',
    })
      .then((res: FetchApiResponse) => {
        return res.data as GetReadingsResProps[];
      })
      .catch((error: FetchError) => {
        throw new FetchError(error.message, error.code);
      });
  },
  getOneReadingById: async (readingId: string) => {

    return await fetchApi({
      path: basePath + '/' + readingId,
      method: 'GET',
    })
      .then((res: FetchApiResponse) => {
        return res.data as GetReadingsResProps;
      })
      .catch((error: FetchError) => {
        throw new FetchError(error.message, error.code);
      });
  },
  postReading: async (data: PostReadingEntryProps) => {

    return await fetchApi({
      path: basePath,
      method: 'POST',
      options: {
        body: JSON.stringify(data)
      }
    })
      .then((res: FetchApiResponse) => {
        return res.data as GetReadingsResProps;
      })
      .catch((error: FetchError) => {
        throw new FetchError(error.message, error.code);
      });
  },
  putReading: async (data: PutReadingEntryProps) => {

    return await fetchApi({
      path: basePath,
      method: 'PATCH',
      options: {
        body: JSON.stringify(data)
      }
    })
      .then((res: FetchApiResponse) => {
        return res.data as GetReadingsResProps;
      })
      .catch((error: FetchError) => {
        throw new FetchError(error.message, error.code);
      });
  },
  deleteReading: async (readingId: string) => {

    return await fetchApi({
      path: basePath + '/' + readingId,
      method: 'DELETE',
    })
      .catch((error: FetchError) => {
        throw new FetchError(error.message, error.code);
      });
  }
};