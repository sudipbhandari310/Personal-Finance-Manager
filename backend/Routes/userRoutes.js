// Routes/userRoutes.js
const express = require('express');

const router = express.Router();
const { signUp, logIn } = require('../controller/userController');
const { signUpValidation, loginValidation } = require('../helper/validation');
const {authenticateToken} = require('../helper/jwtAuth')
const {getDashboard} = require('../controller/dashboardController')




router.post('/signup', signUpValidation, signUp);
router.post('/login', loginValidation, logIn);
router.get('/dashboard',authenticateToken,getDashboard)
// Export the router
module.exports = router;
