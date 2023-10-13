import express, { Request, Response } from 'express';
import { Sequelize } from 'sequelize';
import Aluno from './models/alunos';

const app = express();
const port = process.env.PORT || 3000;
const aluno = new Aluno('João', 20, '2020001', 1);
console.assert(aluno.getNome() === 'João', 'Nome do aluno não está correto.');
console.log('Nome do aluno:', aluno.getNome());

// Configure o Sequelize para se conectar ao banco de dados PostgreSQL
const sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});

// Teste a conexão com o banco de dados
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });

// Defina as rotas e middlewares do Express
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Olá, mundo!');
});
// Inicie o servidor Express
app.listen(port, () => {
  console.log(`Servidor Express está ouvindo na porta ${port}`);
});
