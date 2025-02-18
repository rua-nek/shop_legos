const express = require("express");
const router = express.Router();

const indexRouter = require("./index");
const usersRouter = require("./users");
const accountRouter = require("./account");

// Sử dụng các router con
router.use("/account", accountRouter);
router.use("/users", usersRouter);
router.use("/", indexRouter);

module.exports = router;
