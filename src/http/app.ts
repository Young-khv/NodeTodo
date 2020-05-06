import express, { Application } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import todoRouter from './routers/todoRouter';

export default (): Application => {
  const app: Application = express();

  app.use(bodyParser.json());
  app.use(cors());
  app.use(todoRouter);

  return app;
};
