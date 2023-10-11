const mongoose = require('mongoose');
const Arrangement = require('../db/models/Arrangement');

mongoose.connect('mongodb://localhost/flower_shop', { useNewUrlParser: true});

// Seed data for arrangements






const arrangementSeedData = [
    {
      name: 'Sunflower Delight',
      color: 'Yellow',
      price: 29.99,
    },
    {
      name: 'Elegant Rose Bouquet',
      color: 'Red',
      price: 39.99,
    },
    {
      name: 'Spring Garden Arrangement',
      color: 'Multicolored',
      price: 49.99,
    },
    {
      name: 'Lavender Love',
      color: 'Purple',
      price: 34.99,
    },
    {
      name: 'Tropical Breeze',
      color: 'Tropical Colors',
      price: 44.99,
    },
    {
      name: 'Classic White Roses',
      color: 'White',
      price: 37.99,
    },
    {
      name: 'Crimson Elegance',
      color: 'Crimson',
      price: 41.99,
    },
    {
      name: 'Wildflower Mix',
      color: 'Various',
      price: 32.99,
    },
    {
      name: 'Orchid Paradise',
      color: 'Orchid Colors',
      price: 54.99,
    },
    {
      name: 'Autumn Harvest',
      color: 'Autumn Colors',
      price: 47.99,
    },
  ];
  
  async function seedArrangements() {
    try {
        await Arrangement.deleteMany({});
        await Arrangement.insertMany(arrangementSeedData);

        console.log('Arrangements seeded successfully.');
  } catch (err) {
    console.error('Error seeding arrangements:', err);
  } finally {
    mongoose.disconnect();
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
  
