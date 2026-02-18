import express from 'express';
import { createTodo, getAllTodo, deleteTodo, updateTodo } from '../controller/todoController.js';

const todoRoute = express.Router()

todoRoute.post('/create', createTodo) // api + url + function
todoRoute.get('/getAll', getAllTodo)

todoRoute.delete('/delTodo/:id', deleteTodo)
todoRoute.put('/update/:id', updateTodo)

//POST http://localhost:8002/create  run createTodo

export default todoRoute
//port server res