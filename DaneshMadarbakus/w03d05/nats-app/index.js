const express = require('express');
const morgan  = require('morgan');

//Create an express app by envoking the express package/function
const app     = express();
const port    = process.env.PORT || 3000;

// Use morgan for logging
app.use(morgan('dev'));

//The directory that we are going to put our iew files in
app.set('views', `${__dirname}/views`);
//What  templating engine we are going to use, http://www.embeddedjs.com/
app.set('view engine', 'ejs');

// GET / - our homepage
app.get('/', (req, res) => res.render('home'));
app.get('/about', (teq, res) => res.render('about'));

//Tell the app to listen on the port and then run a function
app.listen(port, () => console.log(`Express has started on ${port}`));
