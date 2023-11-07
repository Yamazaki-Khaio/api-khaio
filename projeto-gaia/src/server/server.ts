import express from 'express';
import dotenv from 'dotenv';
import { sequelize } from './config/sequelize';

// Load environment variables from .env file
dotenv.config();

// Create an instance of the Express server
const app = express();

// Define the port to listen on
const port = process.env['PORT'] || 3000;


// Start the server

sequelize.sync({ force: true }).then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});

// Exports express app

export default app;
