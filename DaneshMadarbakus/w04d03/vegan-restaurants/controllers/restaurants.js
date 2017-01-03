13require the models
const Restaurant = require('../models/restuarant');

14create index and other functions for the database
function restaurantsIndex(req, res) {
  restaurant.find({}, (err, resturants) => {
    if (err) return console.log(err);
    return res.render('restaurants/index', { resturants});
  });
}
function restaurantsnew(req, res) {
  return res.render('restuarants/new');
}
function restaurantsShow(req, res) {
  Restaurant.findById(req.params.id, (err, restaurant) => {
    if (err) return console.log(err);
    if (!restaurant) return console.log('no restuaant found');
    return res.render('restaurants/show', { restuarant});
  });
}
function restaurantsCreate(req, res) {
  const restaurant = req.body.restuarant;
  if (err) return console.log(err);
  return res.redirect(`/restaurants/${restarant._id}`);
}
function restaurantsEdit(req, res) {
  Restaurant.findById(req.params.id, (err, restaurant) => {
    if (err) return console.log(err);
    if (!restaurant) return console.log('no restuaant found');
    return res.render('restaurants/edit', { restuarant});
  });
}
function restaurantsUpdate(req, res) {
  Restaurant.findByIdAndUpdate(req.params.id, req.nody.restuarant, { new: true }, (err, restaurant) => {
    if (err) return console.log(err);
    if (!restaurant) return console.log('no restuaant found');
    return res.render('restaurants/show', { restuarant});
  });
}
function restaurantsDelete(req, res) {
Restaurant.findByIdAndRemove(req.params.id, err => {
  if (err) return console.log(err);
  return
})
}

15export these controllers so we can use them else where
module.exports = {
  index: restauranstIndex,
  new: restauranstNew,
  show: restauranstShow,
  create: restauranstCreate,
  edit: restauranstNew,
  update: restauranstNew,
  delete: restauranstNew,
}
 16create view pages
