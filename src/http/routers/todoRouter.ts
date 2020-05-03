import express, { Router } from 'express';
import ITodosDto from "../../types/ITodosDto";
import ITodo from "../../types/ITodo";

let todos: ITodo[] = [];

const todoRouter : Router = express.Router();

todoRouter.use((req, res, next) => {setTimeout(next,1500)});

todoRouter.get('/todos', (req, res) => {
  const responseDto: ITodosDto = {
    data: todos
  };
  res.send(responseDto);
});

todoRouter.post('/todos', (req, res) => {
  if(!req.body.data) {
    throw new Error('ERROR: body can not be empty');
  }
  todos = req.body.data as ITodo[];
  res.send('Ok');
});

export default todoRouter;
