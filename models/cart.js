const fs = require('fs');
const path = require('path');

const FILEPATH = path.join(path.dirname(require.main.filename), 'data', 'cart.json');

module.exports = class Cart {
  static addProduct(id, productPrice) {
    fs.readFile(FILEPATH, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }

      // Check if product with this id already in cart
      const existingProductIndex = cart.products.findIndex((product) => product.id === id);
      let updatedProduct;
      const existingProduct = cart.products[existingProductIndex];

      // Increment quantity if product already in cart, otherwise add product to cart
      if (existingProductIndex === -1) {
        updatedProduct = { id: id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];
      } else {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty += 1;
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
      }

      cart.totalPrice += +productPrice;
      fs.writeFile(FILEPATH, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });
  }
};
