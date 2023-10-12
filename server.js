const express = require('express')
const db = require('./db')
const cors = require('cors');

const bodyParser = require('body-parser');
const logger = require('morgan');
const Controller1 = require('./controllers/Controller1');

const app = express();
const PORT = process.env.PORT || 3001;
app.use(bodyParser.json());
app.use(cors());
app.use(logger('dev'));

// Your Code Here

//app.get('/flowers/:color', Controller1.getFlowerByColor)
app.get('/flowers', Controller1.getFlowers);
app.get('/flowers/:id', Controller1.getOneFlower);





app.get('/arrangements', Controller1.getAllArrangements);
app.get('/arrangements/:id', Controller1.getOneArrangement);
app.post('/arrangements', Controller1.createArrangement);
app.put('/arrangements/:id', Controller1.updateArrangement);
app.delete('/arrangements/:id', Controller1.deleteArrangement);




// Your Code Ends Here
app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});