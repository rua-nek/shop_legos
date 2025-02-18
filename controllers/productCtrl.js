const express = require("express");
const Product = require("../models/products");

class productCtrl {
  index = (req, res) => {
    res.json({ message: "Get all products" });
  };
  create = (req, res) => {
    try {
      const { name, description, price, category_id, image, quantity } =
        req.body;
      const newProduct = new Product({
        name,
        description,
        price,
        category_id,
        image,
        quantity,
      });
      newProduct.save();
      res.json({ message: "Product created successfully" });
    } catch (error) {
      res.json({ message: error.message });
    }
  };
  show = async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product)
        return res.status(404).json({ message: "Product not found" });
      res.json(product);
    } catch (error) {
      res.json({ message: error.message });
    }
  };
  update = async (req, res) => {
    try {
      const { name, description, price, category_id, image, quantity } =
        req.body;
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        { name, description, price, category_id, image, quantity },
        { new: true }
      );
      if (!updatedProduct)
        return res.status(404).json({ message: "Product not found" });
      res.json({ message: "Product updated successfully" });
    } catch (error) {
      res.json({ message: error.message });
    }
  };
  destroy = async (req, res) => {
    try {
      const deletedProduct = await Product.findByIdAndDelete(req.params.id);
      if (!deletedProduct)
        return res.status(404).json({ message: "Product not found" });
      res.json({ message: "Product deleted successfully" });
    } catch (error) {
      res.json({ message: error.message });
    }
  };
}

module.exports = new productCtrl();
