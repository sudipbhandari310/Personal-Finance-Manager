const express = require('express');
const router = express.Router();
const { addExpense, getExpenses } = require('../controller/expenseController');
const { authenticateToken } = require('../helper/jwtAuth');

router.post('/add-expense', authenticateToken, addExpense);
router.get('/expense', authenticateToken, getExpenses);

module.exports = router;
