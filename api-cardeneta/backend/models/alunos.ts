import { Model, DataTypes } from 'sequelize';
import  sequelize  from '../server'; // Importe a instância do Sequelize configurada

export default class Aluno extends Model {
  public id!: number;
  public nome!: string;
  public email!: string;
  public matricula!: string;
  public idade!: number;

  // Adicione outros campos do modelo que correspondem aos campos da tabela
}

Aluno.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
    },
    idade: {
      type: DataTypes.INTEGER,
    },
    email: {
      type: DataTypes.STRING,
    },
    matricula: {
      type: DataTypes.STRING,
    },

    // Defina outros campos do modelo aqui
  },
  {
    sequelize, // Passando a conexão instanciada do Sequelize
    schema: 'cardeneta', // Nome do schema no PostgreSQL
    tableName: 'alunos', // Nome da tabela no PostgreSQL
    timestamps: false, // Não crie colunas `createdAt` e `updatedAt`
  }
);

