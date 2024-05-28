import { Schema, Document } from 'mongoose';

export interface IBase extends Document {
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export const base = new Schema<IBase>(
  {
    active: {
      type: Boolean,
      default: true,
      index: true
    },
    deletedAt: {
      type: Date
    }
  },
  {
    timestamps: true
  }
);