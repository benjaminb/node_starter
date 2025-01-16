const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./util/database');

// route imports
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/errors');

// template engine setup
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);

// catchall route
app.use(errorController.get404);

app.listen(3000);
