function errorHandler(err, req, res, next) {
    //console.error(err.stack);
 
    if (err) {
      res.status(err.status).json({
        message: err.message
      });
    } else {
      res.status(500).json({
        message: 'Try again! Error occurred.'
      });
    }
  }
 
  function registerErrorHandler(err, req, res, next) {
    const {
      email,
      password
    } = req.body;
 
    if (!email || !password) {
      const err = new Error(400, 'Must be email and password.');
      next(err);
    } else {
      next();
    }
  }
 
 
  function loginErrorHandler(err, req, res, next) {
    const {
      email,
      password
    } = req.body;
 
    if (!email || !password) {
      const err = new CustomError(400, 'Must be email and password.');
      console.log(err);
      next(err);
    } else {
      next();
    }
  }
 
  module.exports = {
    errorHandler,
    registerErrorHandler,
    loginErrorHandler
  };