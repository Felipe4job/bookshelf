'use server';

import { revalidateTag } from 'next/cache';
import fetchApi, { FetchApiResponse, FetchError } from '../fetchApi';
import { GetUserResProps, PostUserEntryProps, PutUserEntryProps } from './types';

const basePathOne = '/api/v1/user';
const basePathAll = '/api/v1/users';
const tags = [ 'users' ];

export async function userGetAll () {

  return await fetchApi({
    path: basePathAll,
    method: 'GET',
    options: {
      next: {
        tags: tags
      }
    }
  })
    .then((res: FetchApiResponse) => {
      return res.data.user as GetUserResProps[];
    })
    .catch((error: FetchError) => {
      throw new FetchError(error.message, error.code);
    });
}

export async function userGet (userId: string) {

  return await fetchApi({
    path: basePathOne + '/' + userId,
    method: 'GET',
  })
    .then((res: FetchApiResponse) => {
      return res.data as GetUserResProps;
    })
    .catch((error: FetchError) => {
      throw new FetchError(error.message, error.code);
    });
}

export async function userPost (data: PostUserEntryProps) {
  return await fetchApi({
    path: basePathOne,
    method: 'POST',
    options: {
      body: JSON.stringify(data)
    }
  })
    .then((res: FetchApiResponse) => {
      revalidateTag(tags[0]);
      return res.data as GetUserResProps;
    })
    .catch((error: FetchError) => {
      console.error('Erro de requisição: ', error.message, error.code);
      throw new FetchError(error.message, error.code);
    });
}

export async function userPut (data: PutUserEntryProps) {

  return await fetchApi({
    path: basePathOne,
    method: 'PATCH',
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
}

export async function userDelete (userId: string) {

  return await fetchApi({
    path: basePathOne + '/' + userId,
    method: 'DELETE',
  })
    .then((res: FetchApiResponse) => {
      return res.data as { deletadAt: Date };
    })
    .catch((error: FetchError) => {
      throw new FetchError(error.message, error.code);
    });
}

export async function userGetVerifyPass ({ emailOrUser, password }:{ emailOrUser: string, password: string }) {
  const base64Credentials = Buffer.from(`${emailOrUser}:${password}`).toString('base64');

  return await fetchApi({
    path: basePathOne + '/login',
    method: 'GET',
    options:{
      headers: {
        'Authorization': `Basic ${base64Credentials}`
      },
    }
  })
    .then((res: FetchApiResponse) => {
      return res.data as GetUserResProps;
    })
    .catch((error: FetchError) => {
      throw new FetchError(error.message, error.code);
    });
}