const express = require('express');
const db = require("@makeitrealcamp/db-mock")

const { 
  handleCreateData, 
  handleReadData, 
  handleReadDataById,
  handleUpdateData
} = require('./controller')

const app = express()
const port = 8080

// MVC
// Model - View - Controller
// Model: Es la representación de la información que vamos a guardar en la base de datos
// View: Es la representación visual de la información que vamos a mostrar al usuario
// Controller: Es el encargado de recibir las peticiones del usuario y responderle con la información que necesita

app.use(express.json()) // Con esto podemos recibir un body

//CRUD

app.get('/healthcheck', (_, res) => {
  
  res.status(200).send('OK')  
})

// Create - POST
app.post('/users', handleCreateData)

//Read - GET
app.get('/users', handleReadData)

//Read - GET:id
app.get('/users/:id', handleReadDataById)

//Update - PUT
app.put('/users/:id', handleUpdateData)

app.listen(port, () => {
  console.log(`Successfully running at http://localhost:${port}`)
})