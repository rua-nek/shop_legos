const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Khai báo mô hình sản phẩm
const orderSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: "User" },
  products: [
    {
      product_id: { type: Schema.Types.ObjectId, ref: "Product" },
      quantity: Number,
      price: Number,
    },
  ],
  total_price: Number,
  created_at: Date,
  updated_at: Date,
});

module.exports = mongoose.model("Order", orderSchema);
