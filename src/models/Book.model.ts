import { Document, Schema, model } from 'mongoose';
import { Base } from './Base.model';
import { BookshelfModel } from './Bookshelf.model';

export interface IBook extends Document {
  bookshelfId: any;
  volumeInfo: {
    authors?: string[];
    canonicalVolumeLink?: string;
    categories: string[];
    contentVersion?: string;
    description?: string;
    imageLinks?: {
      smallThumbnail: string;
      thumbnail: string
    };
    industryIdentifiers: {
      type: string;
      identifier: string;
    }[];
    language: string;
    pageCount: number;
    publishedDate: Date;
    publisher: string;
    title: string;
    subtitle?: string;
  };
  saleInfo: {
    buyLink: string;
    country: string;
    listPrice: {
      amount: number;
      currencyCode: string;
    };
  };
  lastReading: {
    uuid: string;
    startPage: number;
    lastPage: number;
    startDate: string;
    endDate: string;
    evolution: string;
  }
}

const bookSchema = new Schema<IBook>({
  bookshelfId: {
    type: Schema.Types.ObjectId,
    ref: BookshelfModel,
    required: true,
  },
  volumeInfo: {
    type: Schema.Types.Mixed,
    required: [ true, 'Informações do volume não enviadas' ],
    properties: {
      authors: { type: [ String ] },
      canonicalVolumeLink: { type: String },
      categories: { type: [ String ], required: [ true, 'Categorias do livro não enviadas' ] },
      contentVersion: { type: String },
      description: { type: String },
      imageLinks: {
        type: Schema.Types.Mixed,
        properties: {
          smallThumbnail: { type: String },
          thumbnail: { type: String },
        },
      },
      industryIdentifiers: {
        type: [
          {
            type: { type: String, required: true },
            identifier: { type: String, required: true },
          },
        ],
        required: true,
      },
      language: { type: String, required: true },
      pageCount: { type: Number, required: true },
      publishedDate: { type: Date, required: true },
      publisher: { type: String, required: true },
      title: { type: String, required: true },
      subtitle: { type: String },
    },
    saleInfo: {
      type: Schema.Types.Mixed,
      properties: {
        buyLink: { type: String },
        country: { type: String, required: true },
        listPrice: {
          type: Schema.Types.Mixed,
          required: true,
          properties: {
            amount: { type: Number, required: true },
            currencyCode: { type: String, required: true },
          },
        },
      },
    },
    lastReading: {
      type: Schema.Types.Mixed,
      properties: {
        uuid: { type: String, required: true },
        startPage: { type: Number, required: true },
        lastPage: { type: Number, required: true },
        startDate: { type: String, required: true },
        endDate: { type: String, required: true },
        evolution: { type: String },
      },
    }
  }
});

bookSchema.add(Base);

export const BookModel = model<IBook>('Book', bookSchema);