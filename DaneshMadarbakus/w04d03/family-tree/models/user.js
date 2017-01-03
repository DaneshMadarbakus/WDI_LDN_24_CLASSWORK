const mongoose = require('mongoose');
// step 6 use schema to design what one singular document in this object store or collection will look like
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, required: true, unique: true },
  meta: {
    age: Number,
    website: String,
    address: String,
    country: String
  }
}, {
  timestamps: true
});

// STEP 17 We can make custom methods in Mongoose
// userSchema.methods.sayHello = function(){
//   console.log(`Hi, my name is ${this.firstName}`);
// };

//step 7 - exporting the userSchema we just made
module.exports = mongoose.model('User', userSchema);
