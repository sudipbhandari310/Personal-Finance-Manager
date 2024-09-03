// index.js
const express = require('express');
const app = express();
const pool = require('./db'); // If db.js is correctly configured
const userRoutes = require('./Routes/userRoutes'); // Fix this import
const expenseRoutes = require('./Routes/expenseRoutes');

// Middleware to parse incoming JSON
app.use(express.json());

// Use the user routes with a base path
app.use('/api', userRoutes);
app.use('/api', expenseRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
