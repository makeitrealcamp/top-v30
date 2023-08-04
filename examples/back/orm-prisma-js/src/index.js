const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const { PrismaClient } = require('@prisma/client')

const app = express()
const prisma = new PrismaClient()
const port = 8080

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

// CRUD
// Create - Read - Update - Delete
// POST   - GET  - PUT    - DELETE
app.get('/api/healthcheck', (_, res) => {
  res.status(200).json('Server OK')
})

// Listado de operadores relacionales
// $eq - equal - igual
// $lt - low than - menor que
// $lte - low than equal - menor o igual que
// $gt - greater than - mayor que
// $gte - greater than equal - mayor o igual que
// $ne - not equal - distinto

/* app.get('/api/products', async (_, res) => {
  const products = await prisma.product.findMany({
    where: {
      price: {
        gte: 40000,
        lte: 110000
      }
    }
  })

  return res.status(200).json(products)
}) */

app.get('/api/products', async (_, res) => {
  const products = await prisma.product.findMany()

  return res.status(200).json(products)
})

app.post('/api/products', async (req, res) => {
  const data = req.body

  const productCreated = await prisma.product.create({
    data: {
      name: data.name,
      price: data.price,
      description: data.description,
      stock: 100
    }
  })

  return res.status(201).json(productCreated)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
