const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bcrypt = require('bcryptjs');
const {
  isEmail,
  isPassword
} = require('validator');
var passwordValidator = require('password-validator');


const user = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },

  surname: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    validate: isEmail
  },
  password: {
    type: String,
    unique: true,
    required: true,
    validator: isPassword
  }
}, {
  timestamps: true
});

var validator = require('validator');

validator.isEmail('foo@bar.com');

var schema = new passwordValidator();

schema
.is().min(8)                                   
.is().max(20)                                  
.has().uppercase()                              
.has().lowercase()                            
.has().digits(2)                              
.has().not().spaces()                          
.is().not().oneOf(['Passw0rd', 'Password123']);



/*validator(isPassword, {
  minLength: 6,
  minLowercase: 1,
  minUppercase: 1,
  minNumbers: 1,
  minSymbols: 1,
  returnScore: false,
});
*/


user.pre('save', async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = new mongoose.model('user', user);


module.exports = User;