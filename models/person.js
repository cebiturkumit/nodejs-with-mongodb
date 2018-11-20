var mongoose = require('mongoose');

var Person = mongoose.model('Persons', mongoose.Schema({
    name: String,
    surname: String,
    age: Number,
    job: String
}));

module.exports = Person;