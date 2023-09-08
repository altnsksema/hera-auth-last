const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const User = require('../model/user');
var cookie = require('cookie');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();



const register = async (req, res) => {
    const { email, password } = req.body;

    try {
        const newUser = new User({
            email,
            password
        });
        const savedUser = await newUser.save();
        res.json(savedUser);
    } catch(err){
        console.error(err);
        res.status(500).json({
            error: "Failed. Not saved."
        });
    };
    console.log("register");
   
    console.log(req.body)
};

const login = async(req, _res) => {
    const { email, password } = req.body;

      const user = await User.findOne({ email: email })
      console.log(user)


      if (user) {
        const secret = "DZR'0HvZk}2#;V4,~;8jnWugtLfk#i`}}ey@O|=.?dWjmb)rv}Tt/5L^UBkN+_A";
        const auth = await bcrypt.compare(password, user.password);
        console.log(auth)
        const token = jwt.sign({user}, secret); 

        if (auth) {
            _res.cookie("jsonwebtoken", token, 
            {
              httpOnly: true,
              secure: true,
              maxAge: 1000 * 60 * 60 * 24,
             
            });
          _res.send(token);
        }else{
          throw Error('incorrect password');
        }  
      }else{
        throw Error('incorrect email');
      }
      
    };

module.exports = {
    register,
    login
};

