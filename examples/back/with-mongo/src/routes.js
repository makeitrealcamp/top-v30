const todoRoutes = require('./api/todo')
const userRoutes = require('./api/user')


const routes = (app) => {
  app.use('/api/todos', todoRoutes)
  app.use('/api/users', userRoutes)
}

module.exports = routes