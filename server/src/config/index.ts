import dotenv from 'dotenv';

dotenv.config();

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 1337;

const SERVER = {
  hostname: HOST,
  port: PORT
};

const config = {
  server: SERVER
};

export default config;
