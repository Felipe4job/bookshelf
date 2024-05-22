import { Model, Schema, model } from 'mongoose';
import { BookModel, IBook } from './Book.model';
import { Base } from './Base.model';

export interface IReview extends Document{
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

reviewSchema.add(Base);

export const ReviewModel = model<IReview>('Review', reviewSchema);