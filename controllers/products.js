const products = [];

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    activeAddProduct: true,
    productCSS: true,
    formsCSS: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  console.log('req.body:');
  console.log(req.body);
  products.push({ title: req.body.title, layout: false });
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  res.render('shop', {
    products: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShope: true,
  });
};
