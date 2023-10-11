const express = require('express')
const db = require('./db')

const Controller1 = require('./controllers/Controller1')

const app = express()
const PORT = process.env.PORT || 3001
// Your Code Here

app.get('/flowers', Controller1.getAllFlowers)
app.get('/flowers/:id', Controller1.getOneFlower)
app.get('/flowers/:color', Controller1.getFlowerByColor)



app.get('/arrangements', Controller1.getAllArrangements)
app.get('/arrangements/:id', Controller1.getOneArrangement)
app.post('/arrangements', Controller1.createArrangement)
//app.put('/arrangements', Controller1.updateArrangement)
//app.delete('/arrangement', Controller1.deleteArrangement)









// Your Code Ends Here
app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`)
})