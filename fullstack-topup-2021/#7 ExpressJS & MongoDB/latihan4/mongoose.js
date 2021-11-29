// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/db_latihan', {useNewUrlParser: true, useUnifiedTopology: true});

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
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
  // we're connected!
    const users = await User.find()
    console.log(users)  

    //   const newUser = await User.create({
    //       name: 'rayani pumika',
    //       age: 25,
    //       status: 'active'
    //   })

    //   console.log(newUser)

    // const newUser = new User()
    // newUser.name = 'rayani pumika';
    // newUser.age = 23;
    // newUser.status = 'non active';
    // const insert = await newUser.save()
    // console.log(insert)
});