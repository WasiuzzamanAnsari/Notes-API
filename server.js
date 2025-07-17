import express from 'express';
import notesRoutes from './routes/notesRoutes.js';

const app = express();

app.use(express.json());
app.use('/api/notes', notesRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API is running at http://localhost:${PORT}`);
});