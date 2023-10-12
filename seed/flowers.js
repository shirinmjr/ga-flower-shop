const db = require('../db');
const { Flower } = require('../models');
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


async function seedFlowers() {
  try {
    console.log(typeof (Flower));

    const flowerSeedData = [
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

    // Clear existing data in the flowers collection
    //   await Flower.deleteMany({});

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
seedFlowers();





