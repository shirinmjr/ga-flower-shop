const db = require('../db');
const { Arrangement } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Seed data for arrangements





const arrangementSeedData = [
  {
    name: 'sunflower delight',
    price: 29.99,
    flowers: [
      { name: 'sunflower', price: 2.79 },
      { name: 'daisy', price: 1.49 },
    ],
  },
  {
    name: 'elegant rose bouquet',
    price: 39.99,
    flowers: [
      { name: 'rose', price: 2.99 },
    ],
  },
  {
    name: 'spring garden arrangement',
    price: 49.99,
    flowers: [
      { name: 'tulip', price: 1.99 },
      { name: 'lily', price: 3.49 },
    ],
  },
  {
    name: 'lavender love',
    price: 34.99,
    flowers: [
      { name: 'lily', price: 3.49 },
    ],
  },
  {
    name: 'tropical breeze',
    price: 44.99,
    flowers: [
      { name: 'orchid', price: 4.99 },
    ],
  },
  {
    name: 'classic white roses',
    price: 37.99,
    flowers: [
      { name: 'rose', price: 2.99 },
      { name: 'daisy', price: 1.49 },
    ],
  },
  {
    name: 'crimson elegance',
    price: 41.99,
    flowers: [
      { name: 'rose', price: 2.99 },
      { name: 'lily', price: 3.49 },
    ],
  },
  {
    name: 'wildflower mix',
    price: 32.99,
    flowers: [
      { name: 'daisy', price: 1.49 },
      { name: 'carnation', price: 1.89 },
    ],
  },
  {
    name: 'orchid paradise',
    price: 54.99,
    flowers: [
      { name: 'orchid', price: 4.99 },
    ],
  },
  {
    name: 'autumn harvest',
    price: 47.99,
    flowers: [
      { name: 'sunflower', price: 2.79 },
      { name: 'daisy', price: 1.49 },
      { name: 'rose', price: 2.99 },
    ],
  },
];

async function seedArrangements() {
  try {
    //await Arrangement.deleteMany({});
    let arrangment = await Arrangement.insertMany(arrangementSeedData);
    console.log(arrangment);
    console.log('Arrangements seeded successfully.');
  } catch (err) {
    console.error('Error seeding arrangements:', err);
  } finally {
    db.close();
  }
}
seedArrangements();










// -
//   Arrangement.insertMany(seedArrangements, (err) => {
//     if (err) {
//       console.error('Error seeding arrangements:', err);
//     } else {
//       console.log('Arrangements seeded successfully');
//     }
//   });

