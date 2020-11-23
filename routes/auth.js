const jwt = require('jsonwebtoken');
var key  = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoiU3RyaW5nIiwicGFzc3dvcmQiOiIyNzExODMyNjAwNmQzODI5NjY3YTQwMGFkMjNkNWQ5OCJ9LCJpYXQiOjE1OTk4NDA1Mzh9.yzFk60Mm6fQzEuq8pFifTmBNSL6PbtHMEXzRicXDPTY";
module.exports = (req, res, next) => {

    const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401); // if there isn't any token

  jwt.verify(token, key, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next(); // pass the execution off to whatever request the client intended
  });

}