const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  category_id: { type: Schema.Types.ObjectId, ref: "Categorie" },
  image: String,
  quantity: Number,
  created_at: Date,
  updated_at: Date,
});

module.exports = mongoose.model("Product", productSchema);
