const mongoose = require('mongoose')

let MONGODB_URI = process.env.PROD_MONGODB || process.env.MONGODB_URI || 'mongodb+srv://m001-student:m001-mongodb-basics@cluster0.g8dyb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
  console.log('Successfully connected to MongoDB')
}).catch(e => {
  console.error('Connection error', e.message)
})

const db = mongoose.connection


module.exports =  db