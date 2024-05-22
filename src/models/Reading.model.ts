import { Document, Model, Schema, model } from 'mongoose';
import { BookModel, IBook } from './Book.model';
import { randomUUID } from 'crypto';
import { Base } from './Base.model';

interface IReading extends Document {
  bookId: Model<IBook>;
  startPage: number;
  lastPage?: number;
  startDate: Date;
  endDate?: Date;
  evolution?: string;
  open: boolean;
  logs: ILog[];
  durationSc: number;
}

interface ILog {
  uuid: string;
  action: 'start' | 'pause' | 'stop';
  timestamp: Date;
}

const readingSchema = new Schema<IReading>({
  bookId: {
    type: Schema.Types.ObjectId,
    ref: BookModel,
    required: true,
  },
  startPage: { type: Number, required: true },
  lastPage: { type: Number },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  evolution: { type: String },
  open: { type: Boolean, required: true, default: true },
  logs: [ {
    uuid: { type: String, required: true, unique: true, default: () => randomUUID() },
    action: {
      type: String,
      required: true,
      enum: [ 'start', 'pause', 'stop' ],
    },
    timestamp: { type: Date, required: true, default: () => new Date() },
  } ],
  durationSc: { type: Number, required: true },
});

readingSchema.add(Base);

export const ReadingModel = model<IReading>('Reading', readingSchema);