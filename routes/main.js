const express = require("express");
const router = express.Router();

const indexRouter = require("./index");
const usersRouter = require("./users");
const accountRouter = require("./account");
const productRouter = require("./product.js");
const CategoriesRouter = require("./categories.js");

// Sử dụng các router con
router.use("/products", productRouter);
router.use("/categories", CategoriesRouter);
router.use("/account", accountRouter);
router.use("/users", usersRouter);
router.use("/", indexRouter);

module.exports = router;
