const User = require('../user/user.model')

const { 
  createTodo,
  listTodos,
  showTodo,
  updateTodo,
  deleteTodo
} = require('./todo.service');

const createTodoController = async (req, res) => {
  try {
    const { authorization: userId } = req.headers
    const { title, body, completed } = req.body

    const user = await User.findById(userId)

    if(!user) {
      throw new Error('User not found')
    }

    const newTodo ={
      title,
      body,
      completed,
      user: userId // This is the user id is required to create a todo
    }

    const todo = await createTodo(newTodo)
    user.todos.unshift(todo)
    await user.save({ validateBeforeSave: false })

    res.status(201).json({ message: 'Todo created', data: todo })
  } catch (error) {
    res.status(400).json({ message: 'Todo could not created', data: error.message })
  }
}

const listTodosController = async (req, res) => {
  try {
    const todos = await listTodos()
    res.status(200).json({ message: 'Todos listed', data: todos })
  } catch (error) {
    res.status(400).json({ message: 'Todos could not listed', data: error.message })
  }
}

const showTodoController = async (req, res) => {
  try {
    const { id } = req.params
    const todo = await showTodo(id)
    res.status(200).json({ message: 'Todo listed', data: todo })
  } catch (error) {
    res.status(400).json({ message: 'Todo could not listed', data: error.message })
  }
}

const updateTodoController = async (req, res) => {
  try {
    const { id } = req.params
    const data = req.body

    const newTodo = await updateTodo(id, data)

    res.status(200).json({ message: 'Todo updated', data: newTodo })
  } catch(error) {
    res.status(400).json({ message: 'Todo could not updated', data: error.message })
  }
}

const deleteTodoController = async (req, res) => {
  try {
    const { id } = req.params
    const todo = await deleteTodo(id)

    res.status(200).json({ message: 'Todo deleted', data: todo })
  } catch(error) {
    res.status(400).json({ message: 'Todo could not deleted', data: error.message })
  }
}

module.exports = {
  createTodoController,
  listTodosController,
  showTodoController,
  updateTodoController,
  deleteTodoController
}