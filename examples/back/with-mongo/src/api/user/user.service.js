const User = require('./user.model')

const createUser = async (data) => {
  try {
    const user = await User.create(data)
    return user
  } catch(error) {
    throw new Error(error)
  }
}

module.exports = {
  createUser,
}