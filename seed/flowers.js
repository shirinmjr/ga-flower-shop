const mongoose = require('mongoose');
const Flower = require('../db/models/Flower');
// const db = require('../db');
mongoose.connect('mongodb://localhost/flower_shop', { useNewUrlParser: true });

//const seedData = require('./flowers'); 


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

// Function to seed flowers
async function seedFlowers() {
  try {
    // Clear existing data in the flowers collection
    await Flower.deleteMany({});

    // Insert the seed data into the flowers collection
    await Flower.insertMany(flowerSeedData);

    console.log('Flowers seeded successfully.');
  } catch (err) {
    console.error('Error seeding flowers:', err);
  } finally {
    // Close the database connection
    mongoose.disconnect();
  }
}


async function seedFlowers() {
  try {
    // Clear existing data in the flowers collection
    await Flower.deleteMany({});

    // Insert the seed data into the flowers collection
    await Flower.insertMany(flowerSeedData);

    console.log('Flowers seeded successfully.');
  } catch (err) {
    console.error('Error seeding flowers:', err);
  } finally {
    // Close the database connection
    mongoose.disconnect();
  }
}

async function seedFlowers() {
  try {
    await Flower.deleteMany({});
    await Flower.insertMany(flowerSeedData);
    console.log('Flowers seeded successfully.');
  } catch (err) {
    console.error('Error seeding flowers:', err);
  } finally {
    mongoose.disconnect();
  }
}
seedFlowers();





