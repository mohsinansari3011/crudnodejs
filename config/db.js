const mongoose = require('mongoose');
mongoose.connect('mongodb://sa:ma3011@ds151814.mlab.com:51814/saylani', {useNewUrlParser: true});

module.exports = mongoose;