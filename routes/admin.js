const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();
const products = [];

router.get('/add-product', (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    activeAddProduct: true,
    productCSS: true,
    formsCSS: true,
  });
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
  console.log('req.body:');
  console.log(req.body);
  products.push({ title: req.body.title, layout: false });
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
