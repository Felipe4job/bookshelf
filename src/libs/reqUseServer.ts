'use server';

type reqUserServerType<I, R> = (param: I) => Promise<R>;

export async function reqUseServer<I, R> (func: reqUserServerType<I, R>, params: I): Promise<R> {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    try{      
      const result  = await func(params);
      console.info('Result: ', result);
      resolve(result);
    }catch(e: any) {
      console.error('erro na req: ', e.message, e.code);
      reject(new Error(e.message));
    }
  });
}