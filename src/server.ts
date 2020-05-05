import { Application } from 'express';
import chalk from 'chalk';
import app from './http/app';

const server : Application = app();
const PORT = 3000;

server.listen(PORT, (err) => {
  if (err) {
    return console.error(chalk.stderr(err));
  }
  return console.log(`server is listening on ${chalk.green(PORT)}`);
});
