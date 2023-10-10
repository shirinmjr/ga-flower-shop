const { Schema } = require('mongoose')

const ArrangementSchema = new Schema(
  {
    flowers: { type: Array, ref: 'Flower' },
    price: { type: Number, required: true },
    
  },
  { timestamps: true }
)

module.exports = ArrangementSchema