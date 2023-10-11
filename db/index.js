const mongoose = require('mongoose');


// const dbURL = 'mongodb://localhost:3001/';

mongoose
.connect('mongodb://flower_shop')
// replace url 
.then(() => {
    console.log('Connected to MongoDB');
  })
.catch((e) => {
    console.error('Connection error', e.message)
  });

const db = mongoose.connection

module.exports = db

