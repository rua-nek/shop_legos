const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategoriesSchema = new Schema({
  name: String,
  description: String,
  created_at: Date,
  updated_at: Date,
});

module.exports = mongoose.model("Categorie", CategoriesSchema);
