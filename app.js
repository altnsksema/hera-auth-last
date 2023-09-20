const express = require('express');
const authRoute = require('./routes/auth')
const mongoose = require('mongoose')
const cors = require("cors");
const app = express();
const cookieParser = require('cookie-parser');
const errorHandler = require('errorhandler');

app.use(express.json());

app.use(cookieParser());

app.use(cors());

app.use(express.urlencoded({ extended: true }));

//app.use(validator());

app.use('/auth', authRoute)

// app.use('/auth/login', errorHandler.loginErrorHandler);
// app.use('/auth/register', errorHandler.registerErrorHandler);

app.use(errorHandler);

//app.set("view engine", "jade");


mongoose.connect(process.env.DB_URL).then(()=>{
    console.log('db connect')
    app.listen(process.env.DB_PORT)
}).catch((err)=>{
  console.log(err)
})
    




