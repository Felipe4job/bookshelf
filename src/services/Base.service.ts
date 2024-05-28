import { Error, Model } from 'mongoose';

export default class BaseService <M, I> {
  protected readonly model: Model<M>;
  
  constructor (model: Model<M>) {
    this.model = model;
  }

  async create (data: I): Promise<I> {
    try{
      return await this.model.create(data) as I;
    }catch (error: any) {
      if(error instanceof Error.ValidationError) {
        // console.log('mongoose error', error.errors);
      }
      throw new Error(error.message);
    }
  }

  async getAll (): Promise<I> {
    try{
      return await this.model.find(
        { 
          active: true, 
          deletedAt: null 
        }
      ) as I;
    }catch (error: any) {
      if(error instanceof Error.ValidationError) {
        // console.log('mongoose error', error.errors);
      }
      throw new Error(error.message);
    }
  }
}