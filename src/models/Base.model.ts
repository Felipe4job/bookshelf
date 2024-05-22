import { Schema, Document } from 'mongoose';

interface IBase extends Document {
  active: boolean;
}

export const Base = new Schema<IBase>(
  {
    active: {
      type: Boolean,
      default: true,
    }
  },
  {
    timestamps: true
  }
);