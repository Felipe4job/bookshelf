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
}

export interface FetchApiResponse {
  status: number;
  headers?: any;
  data: any;
}

export class FetchError extends Error {
  code?: string;
  constructor (message: string, code?: string) {
    super();
    this.message = message;
    this.code = code;
  }
}


export default async function fetchApi ({ method, path, gooleBooks, options }: fetchApiProps) {
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
          throw new FetchError(data, status.toString());
        }
      );
  });

  if(status >= 400)
    throw new FetchError(data, code + ' / ' + status.toString());
  
  return { data, status } as FetchApiResponse;
}