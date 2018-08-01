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

exports.getAnyUser = function(req, res, next) {
  User.findOne({ username: req.params.user }, function(err, existingUser) {
    if (err) {
      return next(err);
    }
    // if a user with email does exist return user object
    res.status(200).json({ user: existingUser });
  });
};

exports.addFollower = function(req, res, next) {
  // Get user id
  // Then Find and add to db
  User.findOne({ username: req.params.id }, function(err, existingUser) {
    if (err) {
      return next(err);
    }
    // if a user found use res
    // too update User Model
    User.findOneAndUpdate(
      { username: req.user.username },
      { $addToSet: { following: existingUser } }
    ).exec(function(err, user) {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        res.status(200).send(user);
      }
    });
  });
};

exports.whoFollows = function(req, res, next) {
  User.find({ 'following.username': req.params.id }, function(err, followers) {
    if (err) {
      return next(err);
    }

    User.findOneAndUpdate(
      { username: req.params.id },
      { $addToSet: { followers: followers } }
    ).exec(function(err, user) {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        console.log('success', followers);
        res.status(200).send(followers);
      }
    });
  });
};
