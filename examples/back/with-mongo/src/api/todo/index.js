const router = require('express').Router();
const { 
  createTodoController,
  listTodosController,
  showTodoController,
  updateTodoController,
  deleteTodoController
} = require('./todo.controller');


router.route('/').post(createTodoController)
router.route('/').get(listTodosController)
router.route('/:id').get(showTodoController)
router.route('/:id').put(updateTodoController)
router.route('/:id').delete(deleteTodoController)

module.exports = router;
