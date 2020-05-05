import express, { Application } from 'express';
import bodyParser from 'body-parser';
import todoRouter from './routers/todoRouter';

export default (): Application => {
  const app: Application = express();

  app.use(bodyParser.json());
  app.use(todoRouter);

  return app;
};
