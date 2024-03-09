import { Router } from 'express';
import { getAllMovies, addMovie, updateMovie, deleteMovie, searchMovies } from '../controller/movieController';
import isAdmin from '../middleware/isAdmin';
const router = Router();

// Define routes
router.get('/movies', getAllMovies);
router.post('/movies', addMovie);
router.put('/movies/:id', isAdmin ,updateMovie);
router.delete('/movies/:id',isAdmin , deleteMovie);
router.get('/search', searchMovies);

export default router;
