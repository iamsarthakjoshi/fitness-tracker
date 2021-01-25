import http from 'http';
import app from './app';
import config from './config';
import logger from './logger';

const NAMESPACE = 'Server';
const httpServer = http.createServer(app);

httpServer.listen(config.server.port, () =>
  logger.info(
    NAMESPACE,
    `Server is running ${config.server.hostname}:${config.server.port}`
  )
);
