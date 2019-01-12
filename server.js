const express = require('express');
const app = express();
const mongoose = require('./config/db');

app.listen(3000, () => {
    console.log("Server connected to localhost!")
})


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("db connected");
});

app.use(express.json());

app.use('/', require('./routes/index'));