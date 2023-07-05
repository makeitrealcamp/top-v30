const { 
  createData, 
  readData, 
  readDataById,
  updateData 
} = require('./model')


const handleCreateData = (req, res) => {
    try {
      const { body } = req
      const response = createData({...body})
      
      res.status(201).json({ message: 'User created succesfully!', data: response })
    } catch (error) {
  
      res.status(400).json({ message: error.message })
    }
}

const handleReadData = (_, res) => {
  try {
    const response = readData()

    res.status(200).json({ message: 'Users found succesfully!', data: response })
  } catch(error) {
    res.status(400).json({ message: error.message })
  }
}

const handleReadDataById = (req, res) => {
  try {
    const { id } = req.params

    const response = readDataById(id)

    res.status(200).json({ message: 'User found succesfully!', data: response })
  } catch(error) {
    res.status(400).json({ message: error.message })
  }
}

const handleUpdateData = (req, res) => {
  try {
    const { id } = req.params
    const { body } = req

    const responde = updateData(id, body)

    res.status(200).json({ message: 'User updated succesfully!', data: responde })
  } catch(error) {
    res.status(400).json({ message: error.message })
  }
}

module.exports = {
  handleCreateData,
  handleReadData,
  handleReadDataById,
  handleUpdateData
}