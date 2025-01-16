const Cart = require('./cart');

const FILEPATH = path.join(path.dirname(require.main.filename), 'data', 'products.json');

const writeProductsToFile = (data) => {
  fs.writeFile(FILEPATH, JSON.stringify(data), (err) => {
    console.log(err);
  });
};

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {}

  static fetchAll() {}

  static findById(id) {}

  static deleteById(id) {}
};
