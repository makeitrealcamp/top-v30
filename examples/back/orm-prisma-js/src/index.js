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
// equals?: Int | IntFieldRefInput,
// in?: Int[] | ListIntFieldRefInput,
// notIn?: Int[] | ListIntFieldRefInput,
// lt?: Int | IntFieldRefInput,
// lte?: Int | IntFieldRefInput,
// gt?: Int | IntFieldRefInput,
// gte?: Int | IntFieldRefInput,
// not?: Int | NestedIntFilter

/* app.get('/api/products', async (_, res) => {
  const products = await prisma.product.findMany({
    where: {
      price: {
        equals: 80000
      }
    }
  })

  return res.status(200).json(products)
}) */

app.get('/api/products', async (_, res) => {
  const products = await prisma.product.findMany({
    include: {
      reviews: {
        select: {
          id: true,
          text: true,
          rating: true,
        }
      }
    }
  })

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

app.post('/api/reviews', async (req, res) => {
  const data = req.body

  const review = await prisma.review.create({
    data: {
      text: data.text,
      rating: data.rating,
      product: {
        connect: {
          id: data.productId
        }
      }
    }
  })

  return res.status(201).json(review)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
