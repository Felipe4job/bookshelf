import { Document, Schema, model } from 'mongoose';
import { Base } from './Base.model';

interface IBookshelf extends Document {
  title: string;
  description?: string;
}

const bookshelfSchema = new Schema<IBookshelf>({
  title: { type: String, required: [ true, 'Você precisa dar um título a estante' ] },
  description: { type: String }
});

bookshelfSchema.add(Base);

export const BookshelfModel = model<IBookshelf>('Bookshelf', bookshelfSchema);