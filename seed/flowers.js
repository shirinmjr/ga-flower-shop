const db = require('../db');
//const mongoose = require('mongoose');
const { Flower } = require('../models');
//mongoose.connect('mongodb://localhost/flower_shop', { useNewUrlParser: true });
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//const seedData = require('./flowers'); 




// Function to seed flowers
// async function seedFlowers() {
//   try {
//     // Clear existing data in the flowers collection
//     //await Flower.deleteMany({});

//     // Insert the seed data into the flowers collection
//     await Flower.insertMany(flowerSeedData);

//     console.log('Flowers seeded successfully.');
//   } catch (err) {
//     console.error('Error seeding flowers:', err);
//   } finally {
//     // Close the database connection
//     mongoose.disconnect();
//   }
// }


async function seedFlowers() {
  try {
    console.log(typeof (Flower));

    const flowerSeedData = [
      { "name": "rose", "color": "red", "price": 2.99 },
      { "name": "tulip", "color": "yellow", "price": 1.99 },
      { "name": "daisy", "color": "white", "price": 1.49 },
      { "name": "lily", "color": "pink", "price": 3.49 },
      { "name": "sunflower", "color": "yellow", "price": 2.79 },
      { "name": "orchid", "color": "purple", "price": 4.99 },
      { "name": "carnation", "color": "pink", "price": 1.89 },
      { "name": "daffodil", "color": "yellow", "price": 2.29 },
      { "name": "chrysanthemum", "color": "orange", "price": 3.19 },
      { "name": "hydrangea", "color": "blue", "price": 4.29 }
    ];

    //Clear existing data in the flowers collection
      // await Flower.deleteMany({});

    // Insert the seed data into the flowers collection
    let flowers = await Flower.insertMany(flowerSeedData);
    console.log(flowers);
    console.log('Flowers seeded successfully.');
  } catch (err) {
    console.error('Error seeding flowers:', err);
  } finally {
    // Close the database connection
    db.close();
  }
}

async function seed() {
  try {
    seedFlowers()
    // await Flower.deleteMany({});
    // await Flower.insertMany(flowerSeedData);
    console.log('Flowers seeded successfully.');
  } catch (err) {
    console.error('Error seeding flowers:', err);
  } finally {
    db.close();
  }
}
seedFlowers();





