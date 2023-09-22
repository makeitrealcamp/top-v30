const {
  createUser,
} = require('./user.service')


const userCreateController = async (req, res) =>  {
  try {
    const data = req.body

    const user = await createUser(data)

    res.status(201).json({ message: 'User created', data: user })
  } catch(error) {
    res.status(400).json({ message: 'Error creating user', error: error.message })
  }
}

module.exports = {
  userCreateController,
}