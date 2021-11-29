const mongoose = require('mongoose')
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

module.exports = User