const express = require('express');
const authRoute = require('./routes/auth')
const mongoose = require('mongoose')
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
  res.send("get");
});

app.use('/auth', authRoute)



const secret2 = "DZR'0HvZk}2#;V4,~;8jnWugtLfk#i`}}ey@O|=.?dWjmb)rv}Tt/5L^UBkN+_A";


mongoose.connect("mongodb+srv://root:toor@authservice.gtp3lbh.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log('db connect')
    app.listen(3000)
}).catch((err)=>{
  console.log(err)
})
    




