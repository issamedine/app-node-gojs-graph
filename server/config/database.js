const mongoose = require('mongoose')
  
const db = mongoose.connect('mongodb+srv://issameddine:arsela789@cluster0.i8hk6.mongodb.net/arselaDB?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true  })
    .then(console.log('connected to db succcesfuly...'))
    .catch(e => console.log(e))

module.exports = db

