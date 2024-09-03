const QueryBuilder = require('node-querybuilder')
require('dotenv').config();
const mysql = require('mysql')

const settings ={
    host: process.env.DBHOST,
    database:process.env.DBNAME,
    user:process.env.DBUSERNAME,
    password:process.env.DBPASS
}

const pool = new QueryBuilder(settings, 'mysql', 'pool');

async function testConnection() {
  try {
    // Get a connection from the pool
    const connection = await pool.get_connection();
    console.log('Database connection successful!');
    // Release the connection back to the pool
    connection.release();
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
  }
}


testConnection();
module.exports = pool;
