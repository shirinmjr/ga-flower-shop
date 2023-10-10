const mongoose = require('mongoose')
const FlowerSchema = require('./Flower')
const ArrangementSchema = require('./Arrangement')

const Flower = mongoose.model('Flower', FlowerSchema)
const Arrangement = mongoose.model('Arrangement', ArrangementSchema)

module.exports = {
  Flower,
  Arrangement
}