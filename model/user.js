const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bcrypt = require('bcryptjs');
const {
  isPassword,
  isEmail
} = require('validator');


const user = new mongoose.Schema({
  name: {
    type: String,
    required: true,
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
    validate: [isEmail]
  },
  password: {
    type: String,
    unique: true,
    required: true,
    validate: [isPassword]
  }
}, {
  timestamps: true
});

var validator = require('validator');

validator.isEmail('foo@bar.com');



isPassword(isPassword, {
  minLength: 6,
  minLowercase: 1,
  minUppercase: 1,
  minNumbers: 1,
  minSymbols: 1,
  returnScore: false,
})

validator.isPassword('Deneme.12');

user.pre('save', async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = new mongoose.model('user', user);


module.exports = User;