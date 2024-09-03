const { validationResult } = require('express-validator');
const { insertExpense, getExpensesById } = require('../model/expense');

const addExpense = async (req, res) => {
  const { amount, category, date } = req.body;
  //validate
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const userId = req.user.id;
  //add expense to database
  const data = {
    users_id: userId,
    amount,
    category,
    date,
  };

  //insert into db
  try {
    const expense = await insertExpense(data);
    if (!expense) {
      return res.status(400).json({
        message: 'Failed ',
      });
    }

    return res.status(200).json({
      message: 'Expenses Added successfully',
      data: expense,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error saving te expense',
    });
  }
};

const getExpenses = async (req, res) => {
  const id = req.user.id;

  try {
    const expenses = await getExpensesById(id);
    if (!expenses) {
      return res.status(404).json({
        message: 'no expenses found',
      });
    }

    return res.status(200).json({
      message: 'Expenses Retrived Successfully',
      data: expenses,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error retriving expenses',
      error,
    });
  }
};

module.exports = { addExpense, getExpenses };
