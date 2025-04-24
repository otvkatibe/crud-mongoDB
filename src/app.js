require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

connectDB();

app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('API de Usuários com MongoDB (CommonJS)');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});