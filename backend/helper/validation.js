const { check } = require('express-validator');

const signUpValidation = [
  check('username', 'Username is required ').not().isEmpty(),

  check('email', 'Email is required ')
    .isEmail()
    .withMessage('Please enter a valid email')
    .normalizeEmail({ gmail_remove_dots: true }),
  check('password', 'Password is required ').isLength({ min: 6 }),
];

const loginValidation = [
  check('email', 'Email is required ')
    .isEmail()
    .normalizeEmail({ gmail_remove_dots: true }),
  check('password', 'Password is required ').isLength({ min: 6 }),
];

const expenseValidation = [
  check('amount', 'Amount is required ').not().isEmpty(),
  check('category', 'Category is required ').not().isEmpty(),
  check('date', 'Date is required').not().isEmpty(),
];
module.exports = { signUpValidation, loginValidation, expenseValidation };
