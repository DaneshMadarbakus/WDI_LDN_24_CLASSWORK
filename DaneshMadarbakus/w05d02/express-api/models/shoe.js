const mongoose = require('mongoose');

const shoeSchema = new mongoose.Schema({
  name: { type: String },
  color: { type: String },
  laced: { type: Boolean },
  material: { type: String },
  price: { type: Number }
}, {
  timestamps: true
});

shoeSchema.path('price')
  .set(value => value * 100)
  .get(value => (value/100).toFixed(2));

shoeSchema.set('toJSON', { getters: true, virtuals: false });

module.exports = mongoose.model('Shoe', shoeSchema);
