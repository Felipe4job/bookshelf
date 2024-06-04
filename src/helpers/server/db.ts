import mongoose from 'mongoose';

let _connection:any;

export const connect = (async () => {
  if(_connection) return _connection;

  try {
    _connection = await  mongoose.connect(process.env.MONGO_STRING || '');

    console.info('MongoDB conectado com sucesso!');
    return _connection;

  }catch(error:any) {
    console.error('Erro ao conectar ao MongoDB:', error.message);
    throw error;
  }

})();