const mongodb = require('mongodb');
const { get } = require('../routes/shop');
const getDb = require('../util/database').getDb;

class User {
  constructor(name, email, cart, id) {
    this.name = name;
    this.email = email;
    this.cart = cart;
    this._id = id ? new mongodb.ObjectId(id) : null;
  }

  addToCart(product) {
    const updatedCart = { items: [{ ...product, quantity: 1 }] };
    const db = getDb();
    return db
      .collection('users')
      .updateOne({ _id: new mongodb.ObjectId(this._id) }, { $set: { cart: updatedCart } });
  }

  save() {
    const db = getDb();
    return db.collection('users').insertOne(this);
  }

  static findById(userId) {
    const db = getDb();
    return db
      .collection('users')
      .findOne({ _id: new mongodb.ObjectId(userId) })
      .then(user => user)
      .catch(err => console.log(err));
  }
}

module.exports = User;
