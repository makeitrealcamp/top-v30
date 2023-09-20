const { Schema, model } = require('mongoose');

const todoSchema = new Schema(
  {
    title: String,
    body: String,
    completed: Boolean
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

const Todo = model('todo', todoSchema)

module.exports = Todo