const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

// route imports
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

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
app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3000);
