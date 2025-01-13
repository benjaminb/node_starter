const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

// route imports
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// app setup
const app = express();

// render engine setup
// hbs = expressHbs.create({
//   layoutsDir: 'views/layouts/',
//   defaultLayout: 'main-layout',
//   extname: 'hbs',
// });
// app.engine('hbs', hbs.engine);
app.set('view engine', 'ejs');
// app.set('view engine', 'pug');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/admin', adminData.routes);
app.use(shopRoutes);

// catchall route
app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3000);
