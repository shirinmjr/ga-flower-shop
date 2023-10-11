const mongoose = require('mongoose');
const models = require('../models');
// const db = require('../db');

const run = async () => {
  try {
mongoose.connect('mongodb://localhost/flower-shop', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Model1 = models.Model1;

const model1Data = [
  { "name": "Rose", "color": "Red", "price": 2.99 },
  { "name": "Tulip", "color": "Yellow", "price": 1.99 },
  { "name": "Daisy", "color": "White", "price": 1.49 },
  { "name": "Lily", "color": "Pink", "price": 3.49 },
  { "name": "Sunflower", "color": "Yellow", "price": 2.79 },
  { "name": "Orchid", "color": "Purple", "price": 4.99 },
  { "name": "Carnation", "color": "Pink", "price": 1.89 },
  { "name": "Daffodil", "color": "Yellow", "price": 2.29 },
  { "name": "Chrysanthemum", "color": "Orange", "price": 3.19 },
  { "name": "Hydrangea", "color": "Blue", "price": 4.29 }
];


// await Model1.deleteMany({});
//     await Model1.insertMany(model1Data);
//     console.log('Model1 data seeded successfully');
//   } catch (err) {
//     console.error('Error seeding Model1 data:', err);
//   } finally {
//     mongoose.disconnect();
//   }
// };

// run();
