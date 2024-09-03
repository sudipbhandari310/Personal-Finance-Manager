require('dotenv').config();
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = process.env;

function authenticateToken(req, res, next) {
  if (!req.headers.authorization || req.headers.authorization == undefined)
    return res.status(401).json({ message: 'Authorization is missing.' });
  const token = req.headers.authorization.split(' ')[1]; // Authorization: 'Bearer TOKEN'
  if (!token)
    return res.status(401).json({
      message: 'No token provided.',
    });
  jwt.verify(token, SECRET_KEY, (err, authData) => {
    if (err) {
      console.log(err);
      return res.status(401).json({
        message: 'Invalid token',
      });
    } else {
      // console.log(authData);
      req.user = authData;
      next();
    }
  });
}

module.exports = { authenticateToken };
