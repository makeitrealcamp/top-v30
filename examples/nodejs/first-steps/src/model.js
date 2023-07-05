const db = require("@makeitrealcamp/db-mock")


const createData = (data) => {
  const user = db.insert(data)

  return user
}

const readData = () => {
  const users = db.findAll()

  return users
}

const readDataById = (id) => {
  const user = db.findById(id)

  return user
}

const updateData = (id, data) => {
  const user = db.update({id, ...data})

  return user
}


module.exports = {
  createData,
  readData,
  readDataById,
  updateData
}