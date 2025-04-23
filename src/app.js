require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Conexão com o banco de dados
connectDB();

// Rotas
app.use('/users', userRoutes);

// Rota de teste
app.get('/', (req, res) => {
  res.send('API de Usuários com MongoDB (CommonJS)');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});