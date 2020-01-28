const path = require("path");

const express = require("express");

const gp_adminController = require("../controllers/gp-admin");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", gp_adminController.getAddPlayer);

// // /admin/products => GET
// router.get('/products', gp_adminController.getProducts);

// // /admin/add-product => POST
// router.post('/add-product', gp_adminController.postAddProduct);

// router.get('/edit-product/:productId', gp_adminController.getEditProduct);

// router.post('/edit-product', gp_adminController.postEditProduct);

// router.post('/delete-product', gp_adminController.postDeleteProduct);

module.exports = router;
