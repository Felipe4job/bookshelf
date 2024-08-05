'use server';

import { getSession } from '@/libs/auth';

interface fetchApiProps {
  path: string;
  options?: {
    body?: any;
    headers?: any;
    next?: {
      tags: string[]
    };
  };
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  gooleBooks?: boolean;
  publicRequest?: boolean; 
}

export interface FetchApiResponse {
  status: number;
  headers?: any;
  data: any;
}

export async function FetchError ({ message, code }:{ message: string, code: string }) {
  throw { message, code };
}

async function getSessionToken () {
  const session = await getSession();
  console.log('session aqui', session);
  if (session) {
    return session;
  }
  return null;
}


export default async function fetchApi ({ method, path, gooleBooks, options }: fetchApiProps) {

  getSessionToken();
  let domain = process.env.NEXTAUTH_URL;

  if(gooleBooks)
    domain = 'https://www.googleapis.com';

  let status = 0;
  let data = '';
  let code = '';

  const requestOptions: any = {
    method
  };

  if(options) {

    if(options.headers)
      requestOptions.headers = options.headers;
    else if(options.body) requestOptions.headers = {
      'Content-Type': 'application/json'
    };

    requestOptions.body = options.body;

    if(options.next)
      requestOptions.next = options.next;
  }

  await new Promise((resolve) => {
    fetch(domain + path, requestOptions)
      .then((res) => {
        status = res.status;
        return res.json();
      })
      .then(
        (result) => {        
          resolve(result);

          if(result.error) {
            data = result.error;
            code = result.code;
          } else data = result;
        },
        (error) => {
          data = error.message;
          status = 500;
          throw FetchError({ message: data, code });
        }
      );
  });

  if(status >= 400)
    throw FetchError({ message: data, code: code + ' / ' + status.toString() });
  
  return { data, status } as FetchApiResponse;
}