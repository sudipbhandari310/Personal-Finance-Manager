const pool = require('../db');

const postUser = async (data) => {
  const qb = await pool.get_connection();
  try {
    const result = await qb.insert('users', data);
    return result;
  } catch (err) {
    console.log(err);
  } finally {
    qb.release();
  }
};

const checkIfEmailExists = async (email) => {
  const qb = await pool.get_connection();
  try {
    console.log('Checking email:', email); // Log the email being checked

    // Build and execute the query
    const result = await qb
      .select('*')
      .from('users')
      .where('email', email)
      .get();

    // Log the query being executed
    // console.log('Generated SQL Query:', qb.last_query());

    // Check and log the result of the query
    // console.log('Query result:', result);


    
    // Return the result
    return result.length > 0 ? result[0] : null;
  } catch (error) {
    console.error('Error checking if email exists:', error.message);
    throw error;
  } finally {
    qb.release();
  }
};

module.exports = { postUser, checkIfEmailExists };
