const express = require('express');
const router = express.Router();
const { getProducts } = require('../controllers/products');
/* GET products listing. */
router.get('/', getProducts);

module.exports = router;
