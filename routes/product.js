const express = require("express");
const productCtrl = require("../controllers/productCtrl.js");
const router = express.Router();

// Định nghĩa các route cho product
// GET products
router.get("/", productCtrl.index);
// POST products - Tạo mới sản phẩm
router.post("/", productCtrl.create);
// GET products/:id - Lấy thông tin chi tiết sản phẩm theo ID
router.get("/:id", productCtrl.show);
// PUT products/:id - Cập nhật thông tin sản phẩm theo ID
router.put("/:id", productCtrl.update);
// DELETE products/:id - Xóa sản phẩm theo ID
router.delete("/:id", productCtrl.destroy);
module.exports = router;
