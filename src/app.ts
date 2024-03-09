import express from 'express';
import mongoose from 'mongoose';
import movieRoutes from './routes/movieRoutes';

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/movie-lobby', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}as any);

// Routes
app.use('/', movieRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


export default app;
