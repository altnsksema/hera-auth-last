const express = require('express')
const {auth} = require('../middleware/authMiddleware');
const router = express.Router()
const authController = require('../controllers/auth')
const authController2 = require('../controllers/userController');
router.post('/register', authController.register)
router.post('/login', authController.login)
router.get('/test',auth, authController.test)

/*router.get('/allUsers', authController2.GetAllUsers)
router.get('/oneUser', authController2.GetOneUserById) 
router.put('/allUsers/userID', authController2.updateUser)
router.delete('/allUsers/userID', authController2.deleteUser) */

module.exports = router;