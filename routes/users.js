var express = require("express");
var userCtrl = require("../controllers/usersCtrl");
var router = express.Router();

/* GET users listing. */
router.get("/", userCtrl.index);

module.exports = router;
