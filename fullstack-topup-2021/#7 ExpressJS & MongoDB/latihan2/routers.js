const express = require('express')
const router = express.Router()
const connection = require('./connection')

router.get('/', function (req, res) {
  res.send('Hello World!')
})

router.get('/users', async (req, res) => {
  try {
    if(connection.connect()){
      const db = connection.db('db_latihan')
      const users = await db.collection('users').find().toArray()
      res.send({ data: users })
    } else {
      res.send({ message: 'koneksi database gagal' })
    }
  } catch (err) {
    res.send({ message: err.message || 'internal server error' })
  }
})

module.exports = router