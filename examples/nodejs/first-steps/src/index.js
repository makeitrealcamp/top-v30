const express = require('express');
const db = require("@makeitrealcamp/db-mock")

const app = express()
const port = 8080

app.use(express.json()) // Con esto podemos recibir un body

//CRUD

app.get('/healthcheck', (_, res) => {
  
  res.status(200).send('OK')  
})

// Create - POST
app.post('/users', (req, res) => {
  try {
    const { body } = req
    const response = db.insert({...body})
    
    res.status(201).json({ message: 'User created succesfully!', data: response })
  } catch (error) {

    res.status(400).json({ message: error.message })
  }
})

//Read - GET
app.get('/users', (_, res) => {
  try {
    const response = db.findAll()

    res.status(200).json({ message: 'Users found succesfully!', data: response })
  } catch(error) {
    res.status(400).json({ message: error.message })
  }
})

//Read - GET:id
app.get('/users/:id', (req, res) => {
  try {
    const { id } = req.params

    const response = db.findById(id)

    res.status(200).json({ message: 'User found succesfully!', data: response })
  } catch(error) {
    res.status(400).json({ message: error.message })
  }
})

app.put('/users/:id', (req, res) => {
  try {
    const { id } = req.params
    const { body } = req

    const responde = db.update({id, ...body})

    res.status(200).json({ message: 'User updated succesfully!', data: responde })
  } catch(error) {
    res.status(400).json({ message: error.message })
  }
})

app.listen(port, () => {
  console.log(`Successfully running at http://localhost:${port}`)
})