import { Schema, model, models } from 'mongoose';
import { base, IBase } from './Base.model';

interface IBookshelf extends IBase {
  title: string;
  description?: string;
}

const bookshelfSchema = new Schema<IBookshelf>({
  title: { type: String, required: [ true, 'Você precisa dar um título a estante' ] },
  description: { type: String }
});

bookshelfSchema.add(base);

export const BookshelfModel = models.Bookshelf || model('Bookshelf', bookshelfSchema);