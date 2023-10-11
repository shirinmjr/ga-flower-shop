const mongoose = require('mongoose');

// Replace URL
const dbURL = 'mongodb://localhost/your_database_url';

mongoose
.connect('mongodb://localhost/database_url')

.then(() => {
    console.log('Connected to MongoDB');
  })
.catch((e) => {
    console.error('Connection error', e.message)
  });

const db = mongoose.connection

module.exports = db

