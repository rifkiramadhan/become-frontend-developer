const { ObjectId } = require('bson')
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

router.post('/users', async (req, res) => {
  try {
    if(connection.connect()){
      const { name, age, status } = req.body
      const db = connection.db('db_latihan')
      const users = await db.collection('users').insertOne({
        name,
        age,
        status
      })
      if(users.insertCount === 1){
         res.send({ message: 'berhasil ditambahkan' })
      } else {
        res.send({ message: 'gagal menambahkan user' })
      }
    } else {
      res.send({ message: 'koneksi database gagal' })
    }
  } catch (err) {
    res.send({ message: err.message || 'internal server error' })
  }
})

router.put('/users/:id', async (req, res) => {
  try {
    if(connection.connect()){
      const { id } = req.params
      const { name, age, status } = req.body
      const db = connection.db('db_latihan')
      const users = await db.collection('users').updateOne({ _id: ObjectId(id) }, {
        $set: {
          name,
          age,
          status
        }
      })
      if(users.modifiedCount === 1){
         res.send({ message: 'berhasil diubah' })
      } else {
        res.send({ message: 'gagal mengubah user' })
      }
    } else {
      res.send({ message: 'koneksi database gagal' })
    }
  } catch (err) {
    res.send({ message: err.message || 'internal server error' })
  }
})

router.delete('/users/:id', async (req, res) => {
  try {
    if(connection.connect()){
      const { id } = req.params
      const db = connection.db('db_latihan')
      const users = await db.collection('users').deleteOne({ _id: ObjectId(id) })
      if(users.deletedCount === 1){
         res.send({ message: 'berhasil dihapus' })
      } else {
        res.send({ message: 'gagal menghapus user' })
      }
    } else {
      res.send({ message: 'koneksi database gagal' })
    }
  } catch (err) {
    res.send({ message: err.message || 'internal server error' })
  }
})

module.exports = router