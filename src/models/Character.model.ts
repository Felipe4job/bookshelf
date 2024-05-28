import { Model, Schema, model, models } from 'mongoose';
import { BookModel, IBook } from './Book.model';
import { randomUUID } from 'crypto';
import { base, IBase } from './Base.model';

interface ICharacter extends IBase {
  bookId: Model<IBook>;
  name: string;
  image?: string;
  physhicalDescription?: string;
  personality?: string;
  roleStory?: string;
  developmentArc?: string;
  motivations?: string;
  backstory?: string;
  relationships?: IRelationship[];
  significantQuotes?: {
    uuid: string;
    createdAt: string;
    updatedAt: string;
    text: string;
  }[]
  myComments?: {
    uuid: string;
    createdAt: string;
    updatedAt: string;
    text: string;
  }[]
}

interface IRelationship {
  uuid: string;
  characterId: Model<ICharacter>;
  relationshipType: 
    'Amizade' | 
    'Romance' | 
    'Profissional' | 
    'Mentor' | 
    'Protegido' |
    'Rival' |
    'Aliado' |
    'Inimigo' |
    'Mestre' |
    'Servo' |
    'Pai' |
    'Mãe' |
    'Filho(a)' |
    'Cônjuge' |
    'Ex cônjuge';
  coment: string;
  createdAt: string;
  updatedAt: string;
}

const characterSchema = new Schema<ICharacter>({
  bookId: {
    type: Schema.Types.ObjectId,
    ref: BookModel,
    required: true,
  },
  name: { type: String, required: true },
  image: { type: String },
  physhicalDescription: { type: String },
  personality: { type: String },
  roleStory: { type: String },
  developmentArc: { type: String },
  motivations: { type: String },
  backstory: { type: String },
  relationships: {
    type: [ Schema.Types.Mixed ],
    required: false,
    properties: {
      uuid: { type: String, required: true, unique: true, default: () => randomUUID() },
      characterId: {
        type: Schema.Types.ObjectId,
        ref: 'Character',
        required: true,
      },
      relationshipType: {
        type: String,
        required: true,
        enum: [
          'Amizade',
          'Romance',
          'Profissional',
          'Mentor',
          'Protegido',
          'Rival',
          'Aliado',
          'Inimigo',
          'Mestre',
          'Servo',
          'Pai',
          'Mãe',
          'Filho(a)',
          'Cônjuge',
          'Ex cônjuge',
        ],
      },
      coment: { type: String }, 
      createdAt: { type: String }, 
      updatedAt: { type: String },
    },
  },
  significantQuotes: {
    type: [ Schema.Types.Mixed ],
    required: false,
    properties: {
      uuid: { type: String, required: true, unique: true, default: () => randomUUID() },
      createdAt: { type: String },
      updatedAt: { type: String }, 
      text: { type: String, required: true },
    },
  },
  myComments: {
    type: [ Schema.Types.Mixed ],
    required: false,
    properties: {
      uuid: { type: String, required: true, unique: true, default: () => randomUUID() },
      createdAt: { type: String }, 
      updatedAt: { type: String },
      text: { type: String, required: true },
    },
  }
});

characterSchema.add(base);

export const CharacterModel = models.Character || model('Character', characterSchema);

