const { Schema, model, SchemaType } = require('mongoose');

const todoSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      minlength: [4, 'Title must be at least 4 characters long'],
      maxlength: [30, 'Title must be at most 30 characters long'],
    },
    body: {
      type: String,
      required: [true, 'Body is required'],
      minlength: [4, 'Body must be at least 4 characters long'],
      maxlength: [30, 'Body must be at most 30 characters long'],
    },
    completed: {
      type: Boolean,
      required: false,
      default: false,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

const Todo = model('todo', todoSchema)

module.exports = Todo