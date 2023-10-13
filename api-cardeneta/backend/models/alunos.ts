import { Model, DataTypes } from 'sequelize';


class Aluno extends Model {
    public id!: number;
    public nome!: string;
    public email!: string;
    public idade!: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Aluno.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    idade: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
}, {
    tableName: 'alunos',
    sequelize,
});

export default Aluno;
