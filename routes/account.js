var express = require("express");
var accountCtrl = require("../controllers/accountCtrl");
var router = express.Router();

// GET signup page
router.get("/signup", accountCtrl.getSignup);
// POST signup page
router.post("/signup", accountCtrl.postSignup);
//GET sigin page
router.get("/signin", accountCtrl.getSignin);
//POST signin page
router.post("/signin", accountCtrl.postSignin);
// GET update account page
router.get("/update/:id", accountCtrl.getUpdate);
// PUT update account
router.put("/update/:id", accountCtrl.putUpdate);
module.exports = router;
