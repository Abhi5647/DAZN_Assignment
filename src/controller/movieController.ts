import { Request, Response } from 'express';
import { Movie } from '../models/movieModel';
import isAdmin from './../middleware/isAdmin';
// Controller function to list all movies
export const getAllMovies = async (req: Request, res: Response): Promise<void> => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to add a new movie
export const addMovie = async (req: Request, res: Response): Promise<void> => {
  const { title, genre, rating, streamingLink } = req.body;
  const newMovie = new Movie({ title, genre, rating, streamingLink });
  try {
    const savedMovie = await newMovie.save();
    res.status(201).json(savedMovie);
  } catch (error:any) {
    res.status(400).json({ message: error.message });
  }
};

export const updateMovie = async (req: Request ,res: Response) => {
    try {
      const { id } = req.params;
      const { title, genre, rating, streamingLink } = req.body;
  
      // Check if the movie exists
      const movie = await Movie.findById(id);
      if (!movie) {
        return res.status(404).json({ message: 'Movie not found.' });
      }
  
      // Update movie fields
      if (title) movie.title = title;
      if (genre) movie.genre = genre;
      if (rating) movie.rating = rating;
      if (streamingLink) movie.streamingLink = streamingLink;
  
      // Save updated movie
      await movie.save();
  
      return res.status(200).json({ message: 'Movie updated successfully.' });
    } catch (error) {
      console.error('Error updating movie:', error);
      return res.status(500).json({ message: 'Internal server error.' });
    }
  };

  export const deleteMovie = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
  
      // Check if the movie exists
      const movie = await Movie.findById(id);
      if (!movie) {
        return res.status(404).json({ message: 'Movie not found.' });
      }
  
      // Delete the movie
      await movie.deleteOne();
  
      return res.status(200).json({ message: 'Movie deleted successfully.' });
    } catch (error) {
      console.error('Error deleting movie:', error);
      return res.status(500).json({ message: 'Internal server error.' });
    }
  };

  export const searchMovies = async (req: Request, res: Response) => {
    try {
      const { q } = req.query;
  
      // Search for movies by title or genre
      const movies = await Movie.find({
        $or: [
          { title: { $regex: q, $options: 'i' } }, // Case-insensitive regex search for title
          { genre: { $regex: q, $options: 'i' } }, // Case-insensitive regex search for genre
        ],
      });
  
      return res.status(200).json(movies);
    } catch (error) {
      console.error('Error searching movies:', error);
      return res.status(500).json({ message: 'Internal server error.' });
    }
  };

// Other controller functions for update, delete, and search can be similarly implemented
