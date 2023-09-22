const { Schema, model, models } = require('mongoose');

const emailRegex = new RegExp('[a-zA-Z0-9]{5,10}@[a-z]{3,10}.com')

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      minlength: [2, 'Name must be at least 2 characters long'],
      maxlength: [15, 'Name must be at most 15 characters long'],
    },
    email: {
      type: String,
      match: [emailRegex, 'Email is not valid'],
      validate: [{
/*         // El correo existe ?
        // validator debe retornar
        // true -> pasamos la validación
        // false -> no pasamos la validación */
        validator: async (value) => {
          try {
            const user = await models.user.findOne({ email: value })
            return !user
          } catch(error) {
            return false
          }
        },
        message: 'Email already exists'
      }]
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    todos: {
      type: [{ type: Schema.Types.ObjectId, ref: 'todo' }],
      required: false,
    },
  }, 
  {
    timestamps: true,
    versionKey: false,
  }
) 

const User = model('user', userSchema)


module.exports = User