// Create the required custom methods at the bottom of this file

var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var UserSchema = new Schema({
  // `firstName` must be of type String
  // `firstName` will trim leading and trailing whitespace before it's saved
  // `firstName` is a required field and throws a custom error message if not supplied
  firstName: {
    type: String,
    trim: true,
    required: "First Name is Required"
  },
  // `lastName` must be of type String
  // `lastName` will trim leading and trailing whitespace before it's saved
  // `lastName` is a required field and throws a custom error message if not supplied
  lastName: {
    type: String,
    trim: true,
    required: "Last Name is Required"
  },
  // `email` must be of type String
  // `email` must be unique
  // `email` must match the regex pattern below and throws a custom error message if it does not
  // You can read more about RegEx Patterns here https://www.regexbuddy.com/regex.html
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
message:{
    type: String,
    trim: true,
    required: "Please type a message"
},
  // `lastUpdated` must be of type Date
  lastUpdated: Date,
  // `fullName` must be of type String
  fullName: String
});

// Define the following custom instance methods here

// 1. setFullName: sets the current user's `fullName` property to their lastName appended to their `firstName`
UserSchema.methods.setFullName = function() {
  // Adds "." between first and last name
  this.fullName = `${this.firstName} ${this.lastName}`;
  // Return the new username
  return this.fullName;
};
// 2. lastUpdatedDate: sets the current user's `lastUpdated` property to Date.now()
UserSchema.methods.lastUpdatedDate = function() {
  this.lastUpdated = Date.now();
  // Return the last updated time
  return this.lastUpdated;
};

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;
