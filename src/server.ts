import { Application } from 'express';
import app from './http/app';

const server : Application = app();
const PORT = 3000;

server.listen(PORT, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${PORT}`);
});
