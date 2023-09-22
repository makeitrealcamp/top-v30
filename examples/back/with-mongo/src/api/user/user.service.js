const User = require('./user.model')

const createUser = async (data) => {
  try {
    const user = await User.create(data)
    return user
  } catch(error) {
    throw new Error(error)
  }
}

const listUsers = async () => {
  try {
    const users = await User.find()
    .select('name email')
    .populate({
      path: 'todos',
      select: 'title body completed'
    })
    return users
  } catch(error) {
    throw new Error(error)
  }
}

module.exports = {
  createUser,
  listUsers,
}