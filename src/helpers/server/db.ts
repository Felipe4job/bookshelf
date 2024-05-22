import mongoose from 'mongoose';

let _connection:any;

export const connect = async () => {
  if(_connection) return _connection;

  try {
    _connection = await  mongoose.connect(process.env.NEXT_PUBLIC_MONGO_STRING || '');

    console.log('MongoDB conectado com sucesso!');
    return _connection;

  }catch(error:any) {
    console.error('Erro ao conectar ao MongoDB:', error.message);
    throw error;
  }

};

export const disconnect = async () => {
  if(!_connection) return _connection;

  try {
    await _connection.disconnect();

    console.log('MongoDB desconectado com sucesso!');
    _connection = null;

  } catch (error:any) {

    console.error('Erro ao desconectar do MongoDB:', error.message);
  }
};