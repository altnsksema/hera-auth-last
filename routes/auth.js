const express = require('express')
const {auth} = require('../middleware/authMiddleware');
const router = express.Router()

const authController = require('../controllers/auth')
const authController2 = require('../controllers/userController');
const authController3 = require('../exception/exception');
router.post('/register', authController.register)
router.post('/login', authController.login)
router.get('/test',auth, authController.test)
//router.use(auth, errorHandler.errorHandler);

router.use('/error', authController3.errorHandler);

router.get('/allUsers', authController2.GetAllUsers)
router.get('/oneUser/:id', authController2.GetOneUserById) 
router.put('/allUsers/:id', authController2.updateUser)
router.delete('/allUsers/:id', authController2.deleteUser)

module.exports = router;