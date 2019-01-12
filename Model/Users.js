const mongoose = require('mongoose');


var UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
  });

  const Users = mongoose.model('Users',UserSchema);

  module.exports = Users;