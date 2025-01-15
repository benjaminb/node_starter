const Product = require('../models/product');
const errorController = require('./errors');

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    pageTitle: 'Your Cart',
    path: '/shop/cart',
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    pageTitle: 'Checkout',
    path: '/checkout',
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/index', {
      products: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShope: true,
    });
  });
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    pageTitle: 'Your Orders',
    path: '/orders',
  });
};

exports.getProduct = (req, res, next) => {
  const requestedProductId = req.params.productId;
  Product.findById(requestedProductId, (product) => {
    res.render('shop/product-detail', {
      pageTitle: product.title,
      path: '/product-detail',
      product: product,
    });
  });
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/product-list', {
      products: products,
      pageTitle: 'All Products',
      path: '/products',
    });
  });
};
