const pool = require('../db');
const insertExpense = async (data) => {
  const qb = await pool.get_connection();
  try {
    const result = await qb.insert('user_details', data);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    await qb.release();
  }
};

const getExpensesById = async (id) => {
  const qb = await pool.get_connection();
  try {
    const result = await qb
      .select('category,amount,date')
      .from('user_details')
      .where('users_id', id)
      .get();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = { insertExpense, getExpensesById };
