import express from 'express';
import dotenv from 'dotenv';
import { Sequelize } from './config/sequelize';

// Load environment variables from .env file
dotenv.config();

// Create an instance of the Express server
const app = express();

// Define the port to listen on
const port = process.env['PORT'] || 3000;

// Create a Sequelize instance to connect to the database
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env['DB_HOST'],
  port: Number(process.env['DB_PORT']),
  username: process.env['DB_USERNAME'],
  password: process.env['DB_PASSWORD'],
  database: process.env['DB_NAME'],
});

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});
