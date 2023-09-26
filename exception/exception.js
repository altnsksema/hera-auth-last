function errorHandler(err, req, res, next) {
  if (!name) {
        res.send("Name is required.")
      } else {
        if (!surname) {
          res.send("Surname is required.")
        } else {
          res.send(200);
        }
      }
    
      if (!email || !password) {
        const err = new CustomError(400, 'Must be email and password.');
        console.log(err);
        next(err);
      } else {
        next();
      }

}

// function registerErrorHandler(err, req, res, next) {
  
// }


// function loginErrorHandler(err, req, res, next) {
//   const {
//     name,
//     surname,
//     email,
//     password
//   } = req.body;


//   if (!name) {
//     res.send("Name is required.")
//   } else {
//     if (!surname) {
//       res.send("Surname is required.")
//     } else {
//       res.send(200);
//     }
//   }

//   if (!email || !password) {
//     const err = new CustomError(400, 'Must be email and password.');
//     console.log(err);
//     next(err);
//   } else {
//     next();
//   }
// }

module.exports = {
  errorHandler,
  // registerErrorHandler,
  // loginErrorHandler
};

/*  if (err.name === 'CastError') {
      error = handleCastErrorDB(err)
  } else if (err.code === 11000) {
      error = handleDuplicateFieldsErrorDB(err)
  } else if (err.name === 'ValidationError') {
      error = handleValidationErrorDB(err)
  } else if (err.name === 'JsonWebTokenError') {
      error = jwtError
  } else if (err.name === 'TokenExpiredError') {
      error = jwtExpiredError
  }
    res.status(err.status).json({
      message: err.message
    });


    const {
      name,
      surname,
      email,
      password
    } = req.body;*/