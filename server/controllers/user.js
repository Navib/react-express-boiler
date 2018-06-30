const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

exports.getUser = function(req, res, next) {
  // User has email and password auth'd already
  // We need to give them a token
  User.findOne({ email: req.user.email }, function(err, existingUser) {
    if (err) {
      return next(err);
    }
    // if a user with email does exist return user object
    res.json({ user: existingUser });
  });
};
