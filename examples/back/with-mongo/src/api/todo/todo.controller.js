const Todo = require('./todo.model');


const createTodo = async (req, res) => {
  try {
    const { title, body, completed } = req.body

    const newTodo ={
      title,
      body,
      completed
    }

    const todo = await Todo.create(newTodo)

    res.status(201).json({ message: 'Todo created', data: todo })
  } catch (error) {
    res.status(400).json({ message: 'Todo could not created', data: error.message })
  }
}


module.exports = {
  createTodo
}