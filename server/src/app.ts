import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import logger from './logger';
import router from './routes';

const NAMESPACE = 'App';
const app = express();

/**
    Log the requests
*/
app.use((req: Request, res: Response, next: NextFunction) => {
  const reqMethod = req.method;
  const reqUrl = req.url;
  const reqSocketRemoteAddress = req.socket.remoteAddress;

  /* Log the request */
  logger.info(
    NAMESPACE,
    `METHOD: [${reqMethod}] - URL: [${reqUrl}] - IP: [${reqSocketRemoteAddress}]`
  );

  res.on('finish', () => {
    /* Log the response */
    logger.info(
      NAMESPACE,
      `METHOD: [${reqMethod}] - URL: [${reqUrl}] - IP: [${reqSocketRemoteAddress}] - STATUS: [${res.statusCode}]`
    );
  });

  next();
});

/**
    Parse the body of the request
*/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
CORS and Rules
More Config: https://expressjs.com/en/resources/middleware/cors.html
*/
const cors_rules = {
  // origin: isProduction ? 'https://sarthakjoshi.com' : '*',
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 200
};
app.use(cors(cors_rules));

/** Register Routes */
app.use(router);

/** Error Handling*/
app.use((req, res, next) => {
  const error = new Error('Not Found');

  res.status(400).json({
    message: error.message
  });

  next();
});

export default app;
