// movieController.test.ts

import request from 'supertest';
import app from '../src/app'; // Adjust the path as needed based on your project structure

describe('GET /movies', () => {
  it('should return a list of movies', async () => {
    const response = await request(app).get('/movies');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.any(Array));
  });
});

// Write additional test cases for other controller functions (e.g., updateMovie, deleteMovie, searchMovies)
describe('GET /search?q={query}', () => {
    it('should return movies matching the query', async () => {
      const query = 'Pulp Fiction'; // Change to your test query
      const response = await request(app).get(`/search?q=${query}`);
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true); // Expecting an array of movies
    });
  });
  
  describe('POST /movies', () => {
    it('should add a new movie', async () => {
      const newMovie = {
        title: 'Ram Shyam',
        genre: 'Science Fiction',
        rating: 8.7,
        streamingLink: 'https://example.com/KGF'
      };
      const response = await request(app)
        .post('/movies')
        .send(newMovie);
      expect(response.status).toBe(201); // Assuming successful creation returns 201 status
      expect(response.body).toEqual(expect.objectContaining(newMovie)); // Expecting the response to contain the new movie object
    });
  });
  
  describe('PUT /movies/:id', () => {
    it('should return 200 OK with admin header', async () => {
        const updatedMovie = {
            title: 'The Abhishek Movie', // New title
            genre: 'Science Fiction',
            rating: 8.7,
            streamingLink: 'https://example.com/the_matrix_reloaded'
          };
          const movieId = '65ec2c780960f9e4d3594d1d'; 
      const response = await request(app)
        .put(`/movies/${movieId}`)
        .set('admin', 'true')
        .send(updatedMovie); // If you need to send data in the request body
        
      expect(response.status).toBe(200);
      // Add more assertions if needed
    });
  
    it('should return 401 Unauthorized without admin header', async () => {
        const updatedMovie = {
            title: 'The Matrix Reloaded', // New title
            genre: 'Science Fiction',
            rating: 8.7,
            streamingLink: 'https://example.com/the_matrix_reloaded'
          };
          const movieId = 'movie_id_here'; 
      const response = await request(app)
        .put(`/movies/${movieId}`)
        .send('Unauthorized'); // If you need to send data in the request body
        
      expect(response.status).toBe(401);
      // Add more assertions if needed
    });
  });
  


  describe('DELETE /movies/:id', () => {

    it('should return 200 OK with admin header', async () => {
        const movieId = '65ec39ab27d68434e4fdbf06'; // Replace with the ID of an existing movie
      const response = await request(app).delete(`/movies/${movieId}`).set('admin', 'true');
      expect(response.status).toBe(200); // Assuming successful deletion returns 200 status
    });
    });
  
    it('should return 401 Unauthorized without admin header', async () => {
      const response = await request(app)
        .delete('/movies/:id');
        
      expect(response.status).toBe(401);
      // Add more assertions if needed
    });
  

function put(arg0: string) {
    throw new Error('Function not implemented.');
}
