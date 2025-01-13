const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('adminData.products:', adminData.products, ', ', adminData.products.length > 0);
  products = adminData.products;
  res.render('shop', {
    products: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShope: true,
  });
});

module.exports = router;
