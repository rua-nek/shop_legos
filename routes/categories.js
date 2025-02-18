const express = require("express");
const categoriesCtrl = require("../controllers/categoriesCtrl.js");
const router = express.Router();

// GET categorie one : lấy 1 category theo id
router.get("/:id", categoriesCtrl.show);
// PUT update category
router.put("/:id", categoriesCtrl.update);
// DELETE delete category
router.delete("/:id", categoriesCtrl.delete);
// POST create new category
router.post("/", categoriesCtrl.create);
// GET all categories
router.get("/", categoriesCtrl.index);
module.exports = router;
