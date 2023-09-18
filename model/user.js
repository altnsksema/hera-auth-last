const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();
const bcrypt = require('bcryptjs');
const {isEmail} = require('validator');

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
      lowercase: true,
      validate: [isEmail]
    },
    password: {
      type: String,
      unique: true,
    }
},
{
    timestamps: true
});

var validator = require('validator');

  validator.isEmail('foo@bar.com');

  console.log('');

  

   user.pre('save', async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });

  const User = new mongoose.model('user', user);

  
  module.exports = User;

