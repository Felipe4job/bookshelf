import { errorHandler } from '@/helpers/server/errorHandler';
import { Model, UpdateQuery } from 'mongoose';


export default class BaseService <M, I> {
  protected readonly model: Model<M>;
  
  constructor (model: Model<M>) {
    this.model = model;
  }

  async getAll (): Promise<I[]> {
    try{
      return await this.model.find(
        { 
          active: true, 
          deletedAt: null 
        }
      ).select('-password') as I[];
    }catch (error: any) {
      const message = error.message;

      throw errorHandler(
        {
          msg: message,
          code: 'Bad Request'
        }
      );
    }
  }

  async getById (uuid: string): Promise<I> {
    try{
      const response = await this.model.findById(uuid)
        .where(
          { 
            active: true, 
            deletedAt: null 
          }
        ).select('-password') as I;
      
      return response;

    }catch (error: any) {
      const message = error.message;

      throw errorHandler(
        {
          msg: message,
          code: 'Bad Request'
        }
      );
    }
  }

  async create (data: I): Promise<I> {
    try{
      return await this.model.create(data) as I;
    }catch (error: any) {
      const message = error.message;

      throw errorHandler(
        {
          msg: message,
          code: 'Bad Request'
        }
      );
    }
  }

  async update (uuid: string, data: UpdateQuery<M>): Promise<I> {
    try{
      return await this.model.findOneAndUpdate(
        {
          _id: uuid,  
          active: true, 
          deletedAt: null
        },
        data
      ) as I;
    }catch (error: any) {
      const message = error.message;

      throw errorHandler(
        {
          msg: message,
          code: 
            'Bad Request'
        }
      );
    }
  }

  async delete (uuid: string): Promise<I> {
    try{
      return await this.model.findByIdAndUpdate(
        uuid, 
        {
          deletedAt: new Date(),
          active: false
        }
      ) as I;
    }catch (error: any) {
      const message = error.message;

      throw errorHandler(
        {
          msg: message,
          code: 'Bad Request'
        }
      );
    }
  }
}