const User = require('../model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const loginErrorHandler = require('../exception/exception');
const registerErrorHandler = require('../exception/exception');
//const passport = require('passport-google-oauth');
require('dotenv').config();

const register = async (req, res) => {
  const {
    name,
    surname,
    email,
    password
  } = req.body;

  registerErrorHandler();

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
};

const login = async (req, res) => {
  const {
    name,
    surname,
    email,
    password
  } = req.body;

  loginErrorHandler();

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
