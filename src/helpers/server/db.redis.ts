import { createClient } from 'redis';

let _redisConnection: any;

export const redisConnect = (
  async () => {
    if(_redisConnection) return _redisConnection;

    try {
      let client: any;

      if(process.env.NODE_ENV === 'development')
        client = createClient(); 
      else
        client = createClient({
          password: process.env.REDIS_PASSWORD,
          username: process.env.REDIS_USERNAME,
          socket: {
            host: process.env.REDIS_HOST,
            port: 10357
          }
        });

      client.on('error', (err: any) => { 
        console.error('Redis Client Error', err);
      });

      _redisConnection = await client.connect();

      return _redisConnection;

    } catch(error: any) {
      console.error('Erro ao conectar ao Redis:', error.message);
      throw error;
    } 
  }
)();