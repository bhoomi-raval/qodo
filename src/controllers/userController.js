const users = require('../models/user');

exports.getAllUsers = (req, res) => {
  res.json(users);
};