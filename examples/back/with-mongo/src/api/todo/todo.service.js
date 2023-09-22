const Todo = require('./todo.model');

const createTodo = async (data) => {
  try {
    const todo = await Todo.create(data)
    return todo
  } catch (error) {
    throw new Error(error)
  }
}

const listTodos = async () => {
  try {
    const todos = await Todo.find()
    return todos
  } catch (error) {
    throw new Error(error)
  }
}

const showTodo = async (id) => {
  try {
    const todo = await Todo.findById(id)
    return todo
  } catch (error) {
    throw new Error(error)
  }
}

const updateTodo = async (id, data) => {
  try {
    const newTodo = Todo.findByIdAndUpdate(id, data, { new: true })
    return newTodo
  } catch(error) {
    throw new Error(error)
  }
}

const deleteTodo = async (id) => {
  try {
    const todo = await Todo.findByIdAndDelete(id)
    return todo
  } catch(error) {
    throw new Error(error)
  }
}


module.exports = {
  createTodo,
  listTodos,
  showTodo,
  updateTodo,
  deleteTodo
}