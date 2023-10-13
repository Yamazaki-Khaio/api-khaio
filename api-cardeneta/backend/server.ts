import express, { Request, Response } from 'express';
import { Sequelize } from 'sequelize';
import alunosRouter from './routes/alunos';

const app = express();
const port = process.env.PORT || 3000;

// Configure o Sequelize para se conectar ao banco de dados PostgreSQL
export const sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

// Defina as rotas e middlewares do Express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Inicie o servidor Express
app.listen(port, () => {
  console.log(`Servidor Express está ouvindo na porta ${port}`);

});

// Defina a rota raiz
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
// Defina a rota para a API de alunos
app.use('/api', alunosRouter);

