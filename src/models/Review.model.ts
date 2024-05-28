import { Model, Schema, model, models } from 'mongoose';
import { BookModel, IBook } from './Book.model';
import { base, IBase } from './Base.model';

export interface IReview extends IBase{
  bookId: Model<IBook>;
  text: string;
}

const reviewSchema = new Schema<IReview>({
  bookId: {
    type: Schema.Types.ObjectId,
    ref: BookModel,
    required: true,
  },
  text: { type: String, required: true }
});

reviewSchema.add(base);

export const ReviewModel = models.Review || model('Review', reviewSchema);