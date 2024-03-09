import { Schema, model, Document } from 'mongoose';

// Interface representing a movie document in MongoDB
interface MovieDocument extends Document {
  title: string;
  genre: string;
  rating: number;
  streamingLink: string;
}

// Define movie schema
const movieSchema = new Schema<MovieDocument>({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  rating: { type: Number, required: true },
  streamingLink: { type: String, required: true },
});

// Define and export Movie model
export const Movie = model<MovieDocument>('Movie', movieSchema);
