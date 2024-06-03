const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model')
const productRoutes = require('./routes/product.route')
const app = express()

const PORT = 3000

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/api/products', productRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

mongoose
  .connect(
    'mongodb://127.0.0.1:27017/Simple-CRUD-api?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.5'
  )
  .then(() => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => {
      console.log(`Server is running on PORT: ${PORT}`)
    })
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err)
  })
