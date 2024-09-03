const { postUser, checkIfEmailExists } = require('../model/user');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

const signUp = async (req, res) => {
  const { username, email, password } = req.body;
  //validate incoming request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  //check if email already exists
  const present = await checkIfEmailExists(email);
  if (present) {
    return res.json({ message: 'Email already exists' });
  }
  //hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  const data = {
    username: username,
    email: req.body.email,
    password: hashedPassword,
  };

  try {
    const user = await postUser(data);
    if (!user) {
      res.status(400).json({
        message: 'Signup Failed',
      });
    }
    res.status(201).json({
      message: 'User Created Successfully',
      result: user,
    });
  } catch (error) {
    return res.status(400).json({ message: 'Error signing up' });
  }
};

const logIn = async (req, res) => {
  const { email, password } = req.body;
  //validate incoming request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  //check existing email
  const user = await checkIfEmailExists(email);
  console.log(user);

  if (!user) {
    return res.status(404).json({ message: 'Invalid username or password' });
  }

  //verify the password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid password' });
  }

  //create payload
  const payload = {
    id: user.id,
    username: user.username,
  };
  //generate jwt token
  const token = jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: '10min',
  });

  return res.status(400).json({
    message: 'Login Successful',
    token: token,
  });
};

const logOut = async (req, res) => {
  res.cookie('jwt', '', { expiresIn: 1 });
  res.redirect('/');
};

module.exports = { signUp, logIn, logOut };
