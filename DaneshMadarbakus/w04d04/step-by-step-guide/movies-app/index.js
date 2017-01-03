STEP1 - require all relevant apps (setting up our app)
const express = require('express');
const morgan = require('morgan');
const ejsLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
STEP 11 REQUIRE ROUTER
const router = require('./config/routes');


STEP2 - set up app
const app = express();
const port = process.env.PORT || 3000;

STEP3 set up mongo database
const databaseUrl = 'mongodb://localhost//movieApp';
mongoose.connect(databaseUrl, () => {
  return console.log(`connected to db: ${databaseUrl}`);
});

STEP 4 SETTINGS
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`)

STEP 5 middleware
app.use(morgan('dev'));
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.urlencoded({ extended: true });
app.use(methodOverride(req => {
  if(req.body && typeof req.body === 'object' && '_method' in req.body) {

  }
});
app.use(ejslayouts);
STEP 12
app.use('/')

STEP 6 make it listen
app.listen(port, () => {
  return console.log(`Express is listen on port ${port}`);
})

STEP 7 MAKE ROUTE/ROUTER/VIEWS FILE
