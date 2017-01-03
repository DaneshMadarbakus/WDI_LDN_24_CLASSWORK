//step 1 - after npm init (JSON) we create the main js file (index.js this one) then npm i mongoose --save and now we require it
const mongoose = require('mongoose');
// step 2 define the url for the mongoose to link to. every mongoose has a url. we just need to define it so that we can make the connection in the next step
const databaseUrl = 'mongodb://localhost/family-tree7';
// step 3 make the connection
mongoose.connect(databaseUrl);
// step 4 make the models directory and touch a user.js file into it - good practice to make files inside model singular (user - not users)
// step 5 require mongoose into user.js

//Step 8 we are requiring the userSchema from the module.exports in the user.js
const User = require('./models/user');

//Step 9 we are creating a new person to the mongodb
const person = new User({
  firstName: 'Alex',
  meta: {
    age: 28
  },
  email: 'alex@alex.com'
});

//Step 10 we want to log the above variable/const from above (we typed "node index.js" into the terminal)
// console.log(person);

//Step 11 try to save our about person const/variable into mongo. If there is an error console.log what that error is otherwise console.log the file that was created. After saved, you can comment it out as we dont want to save it again
// person.save((err, user) => {
//   if (err) return console.log(err);
//   return console.log(`User was created! ${user}`);
// });

//Step 12 we want to find the user and log back the users - this function will always return an array
//INDEX...
User.find({}, (err, users) => {
  if (err) return console.log(err);
  return console.log(users);
});

//Step 13 - find a user by ID. Example of how to find a user by ID
//SHOW...
// User.findById('585a9e305012eeca845be12b', (err, user) => {
//   if (err) return console.log(err);
//   return console.log(user);
// });

//Step 14 - Just an example of how to find by another parameter
//
// User.findOne({ firstName: 'Alex' }, (err, user) => {
//   if (err) return console.log(err);
//   if (!user) return console.log('No user found!');
//   return console.log(user);
// });

//Step 15 - We can do update. Find by ID and update
//UPDATE...
// User.findByIdAndUpdate('585a9e305012eeca845be12b', {
//   meta: { age: 31 } /* thing we wanna change */
// }, { new: true }, (err, user) => {
//   if (err) return console.log(err);
//   return console.log(user);
// });

//Step 16 - We can do delete.
//DELETE...
// User.findByIdAndRemove('585a9e305012eeca845be12b', err => {
//   if(err) return console.log(err);
//   return console.log('Deleted');
// });

//STEP 18 we can use the custom method that we just created
// User.findOne((err, user) => {
//   if (err) return console.log(err);
//   console.log(user);
//   user.sayHello();
// });

//STEP 18a point - I may have created the document page(object) twice 
