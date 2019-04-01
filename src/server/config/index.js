/*
Import the external libraries:
- dotenv
*/
import dotenv from 'dotenv';

// Activatie the dotenv settings from .env file
dotenv.config();

// Create configuration object
const config = {
    nodeEnvironment: process.env.NODE_ENV,
    nodeHostname: process.env.NODE_SERVER_HOSTNAME,
    nodePort: process.env.NODE_SERVER_PORT,
    mongoDbConnectionstring: process.env.MONGODB_CONNECTION,
};

export default config;
