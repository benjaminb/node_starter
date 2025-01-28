const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoConnect = require('./util/database').mongoConnect;

// Model imports
const User = require('./models/user');

// route imports
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/errors');

// template engine setup
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));

// middleware
app.use((req, res, next) => {
  User.findById('679511b8102a3fa61258e890')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use(bodyParser.urlencoded({ extended: true }));

// // routes
app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);

// // catchall route
app.use(errorController.get404);

mongoConnect(() => {
  app.listen(3000);
});
