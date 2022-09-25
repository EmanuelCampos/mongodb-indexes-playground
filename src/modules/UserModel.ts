import mongoose, { Schema } from 'mongoose';

export interface User {
  first_name: string;
  last_name: string;
  email: string;
  profession: string;
  sex: string;
}

export const UserSchema = new Schema(
  {
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    profession: {
      type: String,
    },
    sex: {
      type: String
    }
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
    collection: 'User',
  },
);


export const UserModel = mongoose.model('User', UserSchema);
