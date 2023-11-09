// src/config/sequelize.ts
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

// load .env file from root folder
const sequelize = new Sequelize(process.env.DB_URI as string);

export default sequelize;