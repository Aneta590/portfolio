const mongoose = require('mongoose')


const heroesSchema = new mongoose.Schema({
  name: String,
  age: Number,
  image: String,
  power: Array,
  created: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model("heroes", heroesSchema)