var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var battleSchema = new Schema({
  title: { type: String, required: true, unique: true },
  start_date: { type: Date, required: true },
  end_date: Date,
  location: [String],
  description: String,
  victor: String,
  consequences: String,
  important_people: [String]
});

var Battle = mongoose.model('Battle', battleSchema);

module.exports = Battle;