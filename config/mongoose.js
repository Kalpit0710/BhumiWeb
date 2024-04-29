const mongoose = require('mongoose');
const mysql = require('mysql');
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb+srv://bhumikaporiya16:0RVox31ifdVCuDkY@cluster0.erfqyfh.mongodb.net/?retryWrites=true&w=majority&appName=cluster0');  //connect db
const db = mongoose.connection;  //acquire the connection



db.on('error', console.error.bind(console, 'connection error:')); // will listen each time 
db.once('open', function() {  //will listen only once
  console.log('Success db');
});





