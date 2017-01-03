1initialise npm and install all packages
2require all the packages we installed
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const ejsLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

3create the app
const app = express();
const port = process.env.PORT || 3000;
const databaseUrl = 'mongodb://localhost/veganness';
22require the router file
const router = requir,

7connect to mongoose
mongoose.connect(databaseUrl, () => console.log(`connected to ${databaseUrl}`))

6now do settings
app.set('view engine', 'ejs');
app.set('views, dirname views')

5set up middleware
app.use morgan
app.use(bodyParser.urlencodede
app.use(express.statics())
app.use(methodOverride(req => {
  if (req.body && typeof req.body)
}))
app.use(ejsLayouts);

4check to see if it is working
 app.listen(port, () => console.log(`Started on port: ${port}`));

8mkdir public views public class
mkdir views public public/css
➜  vegan-restaurants git:(master) ✗ touch views/layout.ejs
➜  vegan-restaurants git:(master) ✗ touch public/css/style.css
➜  vegan-restaurants git:(master) ✗ mkdir config
➜  vegan-restaurants git:(master) ✗ touch config/routes.js
➜  vegan-restaurants git:(master) ✗ mkdir models
➜  vegan-restaurants git:(master) ✗ mkdir controllers
➜  vegan-restaurants git:(master) ✗ touch models/restuarant.js
