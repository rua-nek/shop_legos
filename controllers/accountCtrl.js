const express = require("express");
var user = require("../models/users.js");

class accountCtrl {
  // Get signup page
  getSignup(req, res) {
    res.json({ message: "GET signup page" });
  }

  // Post signup form data
  postSignup = async (req, res) => {
    try {
      const { name, email, password, address, phone, role } = req.body;
      const newUser = new user({ name, email, password, address, phone, role });
      await newUser.save();
      res.json({ message: "User created successfully" });
    } catch (error) {
      res.json({ message: error.message });
    }
  };

  // GET signin page
  getSignin(req, res) {
    res.json({ message: "GET signin page" });
  }

  // POST signin form data
  postSignin = async (req, res) => {
    try {
      const { email, password } = req.body;
      const existingUser = await user.findOne({ email });
      if (!existingUser) {
        return res.status(400).json({ message: "User not found" });
      }
      if (password !== existingUser.password) {
        return res.status(400).json({ message: "Invalid password" });
      }
      res.json({ message: "Signin successful" });
    } catch (error) {
      res.json({ message: "can not signin" });
    }
  };
  // GET update account page
  getUpdate = async (req, res) => {
    try {
      const existingUser = await user.findById(req.params.id);
      if (!existingUser) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(existingUser);
    } catch (error) {
      res.json({ message: error.message });
    }
  };
  // PUT update account
  putUpdate = async (req, res) => {
    try {
      const { name, email, password, address, phone } = req.body;
      const updatedUser = await user.findByIdAndUpdate(
        req.params.id,
        {
          name,
          email,
          password,
          address,
          phone,
        },
        { new: true }
      );
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json({ message: "User updated successfully", user: updatedUser });
    } catch (error) {
      res.json({ message: error.message });
    }
  };
}

module.exports = new accountCtrl();
