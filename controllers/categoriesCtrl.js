const express = require("express");
const Category = require("../models/categories.js");
class categoriesCtrl {
  index = (req, res) => {
    res.json({ message: "Categories" });
  };
  show = async (req, res) => {
    try {
      const category = await Category.findById(req.params.id);
      res.json(category);
    } catch (err) {
      res.json({ message: err });
    }
  };
  create = async (req, res) => {
    try {
      const { name, description } = req.body;
      const newCategory = new Category({ name, description });
      await newCategory.save();
      res.json({ message: "Category created successfully" });
    } catch (err) {
      res.json({ message: err });
    }
  };
  update = async (req, res) => {
    try {
      const { name, description } = req.body;
      const category = await Category.findById(req.params.id);
      category.name = name;
      category.description = description;
      await category.save();
      res.json({ message: "Category updated successfully" });
    } catch (err) {
      res.json({ message: err });
    }
  };
  delete = async (req, res) => {
    try {
      await Category.findByIdAndDelete(req.params.id);
      res.json({ message: "Category deleted successfully" });
    } catch (err) {
      res.json({ message: err });
    }
  };
}

module.exports = new categoriesCtrl();
