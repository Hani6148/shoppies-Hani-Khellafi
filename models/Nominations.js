const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NomSchema = new Schema({
  title: { type: String, required: true },
  year: { type: String, required: true },
  poster: { type: String, required: true },

});

const Nominations = mongoose.model("Book", NomSchema);

module.exports = Nominations;