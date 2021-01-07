const express = require("express");
const router = express.Router();
const {
  postProduct,
  getProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product");
const { auth, authorize } = require("../middleware/auth");

router.route("/").get(getProduct).post(auth, authorize("admin"), postProduct);
router.route("/all").get(getAllProduct);
router
  .route("/:id")
  .put(auth, authorize("admin"), updateProduct)
  .delete(auth, authorize("admin"), deleteProduct);

module.exports = router;