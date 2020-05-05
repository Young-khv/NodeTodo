import { Router } from 'express';
import TodosDto from '../../types/TodosDto';
import Todo from '../../types/Todo';

const PATH = '/todos';

let todos: Todo[] = [];

const todoRouter : Router = Router();

todoRouter.use((req, res, next) => { setTimeout(next, 1500); });

todoRouter.get(PATH, (req, res) => {
  const responseDto: TodosDto = {
    data: todos,
  };
  res.send(responseDto);
});

todoRouter.post(PATH, (req, res) => {
  if (!req.body.data) {
    throw new Error('ERROR: body can not be empty');
  }

  todos = req.body.data as Todo[];

  res.send('Ok');
});

export default todoRouter;
