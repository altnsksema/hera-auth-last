const User = require('../model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const loginErrorHandler = require('../exception/exception');
const registerErrorHandler = require('../exception/exception');
require('dotenv').config();

const register = async (req, res, next) => {
  try {
    const {
      name,
      surname,
      email,
      password
    } = req.body;
  
    if (!name) {
      res.send("Name is required.")
    } else {
      if (!surname) {
        res.send("Surname is required.")
      } else {
        res.send(200);
      }
    }
  
    const newUser = new User({
      name,
      surname,
      email,
      password
    });
    const savedUser = await newUser.save();
    res.json(savedUser);
  
    console.log("Enrolled.");
    console.log(req.body)
  } catch (err) {
    next(err)
  }

  
};

const login = async (req, res,) => {
  const {
    email,
    password
  } = req.body;

  if (!email || !password) {
    res.status(401).json({
      message: 'Please provide an email and a password'
    })
  }
 

  const user = await User.findOne({
    email
  })
  console.log(user)

  if (!user) {
    return res.status(401).json({
      message: 'Not found user in email.'
    })
  }

  const passwordCorrect = await bcrypt.compare(password, user.password);
  console.log(passwordCorrect)
  const token = jwt.sign({
    user
  }, process.env.SECRET_KEY);

  if (!passwordCorrect) {
    return res.status(401).json({
      message: 'Incorrect password.'
    })
  }

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: req.true,
    maxAge: 1000 * 60 * 60 * 24,
  });

  res.send({
    status: 'success',
    message: 'Login successfull!'
  });
};

function test(req, res) {
  res.send({
    status: 400
  })
}


module.exports = {
  register,
  login,
  test
};
