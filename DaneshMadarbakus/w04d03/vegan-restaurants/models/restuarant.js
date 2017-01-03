9require the mogoose
const mongoose = require('mongoose');

10setup a schema for what one object or page document should look like
const restaurantSchema = new mongoose.Schema({
  name: { type: String, trim: true },
  description: { type: String },
  location: { type: String },
  rating: { type: Number, enum: [0,1,2,3,4,5,], required: true}
}, {
timestamps: true
});

11export whats in this file so all the other files can access it
module.exports = mongoose.model('Restaurant', restaurantSchema);

12create controller file
m➜  vegan-restaurants git:(master) ✗ touch controllers/restaurants.js
