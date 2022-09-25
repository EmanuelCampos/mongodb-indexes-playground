import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

export const connectDatabase = async (): Promise<void> => {
  await mongoose.connect(process.env.MONGO_URI as string);
};
