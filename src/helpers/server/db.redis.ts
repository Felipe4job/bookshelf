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
          url: process.env.REDIS_URL,
          password: process.env.REDIS_PASSWORD,
          username: process.env.REDIS_USERNAME
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