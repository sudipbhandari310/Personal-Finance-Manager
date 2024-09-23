const express = require('express');
const app = express();
const pool = require('./db');
const cors = require('cors');
const userRoutes = require('./Routes/userRoutes');
const expenseRoutes = require('./Routes/expenseRoutes');

app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
  })
);

// Middleware to parse incoming JSON
app.use(express.json());
app.get('/test', (req, res) => {
  res.send('Route Test Successful');
});
//base path
app.use('/api', userRoutes);

app.use('/api', expenseRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
