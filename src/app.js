require('dotenv').config();
import express, { json } from 'express';
import cors from 'cors';
import connectDB from './config/db';
import userRoutes from './routes/userRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(json());

connectDB();

app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('API de Usuários com MongoDB (CommonJS)');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});