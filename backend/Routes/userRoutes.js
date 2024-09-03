// Routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { signUp, logIn, logOut } = require('../controller/userController');
const { signUpValidation, loginValidation } = require('../helper/validation');
const { authenticateToken } = require('../helper/jwtAuth');

// Define the route
router.post('/signup', signUpValidation, signUp);
router.post('/login', loginValidation, logIn);
router.get('/logout', authenticateToken, logOut);

// Export the router
module.exports = router;
