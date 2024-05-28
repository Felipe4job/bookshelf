interface fetchApiProps {
  path: string;
  options?: {
    body?: any;
    header?: any;
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

// const handleFetch = async () => {

// };

export default async function fetchApi ({ method, path, gooleBooks, options }: fetchApiProps) {
  let domain = '';

  if(gooleBooks)
    domain = 'https://www.googleapis.com';

  let status = 0;
  let data = '';

  const requestOptions: any = {
    method
  };

  if(options && options.body) {
    requestOptions.headers = {
      'Content-Type': 'application/json'
    };
    requestOptions.body = options.body;
  }

  await new Promise((resolve) => {
    fetch(domain + path, requestOptions)
      .then((res) => res.json())
      .then(
        (result) => {        
          resolve(result);

          if(result.error) {
            data = result.error.message;
            status = result.error.code;

            throw new Error();
          }else{
            data = result;
            status = 200;
          }
        },
        (error) => {
          data = error.message;
          status = 500;
          throw new FetchError(data, status.toString());
        }
      );
  });

  if(status >= 400)
    throw new FetchError(data, status.toString());

  return { data, status } as FetchApiResponse;
}