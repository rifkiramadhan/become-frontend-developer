// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/db_latihan', {useNewUrlParser: true, useUnifiedTopology: true});

const userSchema = new mongoose.Schema({
  name: { 
      type: String,
      required: [true, 'nama tidak boleh kosong']
  },
  age: {
      type: Number,
      required: [true, 'umur tidak boleh kosong']
  },
  status: {
      type: String,
      enum: ['active', 'non active'],
      default: 'non active'
  }
});

const User = mongoose.model('User', userSchema);

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', async () => {

    // const user = await User.create({
    //     name: 'tio',
    //     age: 23
    // })
    // console.log(user)

    const users = await User.find()
    console.log(users)  

    // const deleteUser = await User.deleteOne({ _id: '61a23d959f7a1dd1617837c7' })
    // console.log(deleteUser)
});