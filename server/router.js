const Authentication = require('./controllers/authentication');
const User = require('./controllers/user');
const Message = require('./controllers/message');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
  /* Get User */
  app.get('/user', requireAuth, function(req, res, next) {
    User.getUser(req, res, next);
  });
  app.get('/getMessages/:user', function(req, res, next) {
    Message.getMessages(req, res, next);
  });
  app.get('/get/user', requireAuth, function(req, res, next) {
    User.getUser(req, res, next);
  });
  /* End User */

  /* Start Auth Routes */
  app.post('/signin', requireSignin, Authentication.signin);

  app.post('/signup', Authentication.signup);
  /* End Auth routes */

  /* Start Message Routes */
  app.post('/message', requireAuth, function(req, res, next) {
    Message.sendMessage(req, res, next);
  });

  app.post('/message/delete/:id', requireAuth, function(req, res, next) {
    Message.deleteMessage(req, res, next);
  });
  /* End Message Routes */

  /* Follower Routes */
  app.post('/add/follower/:id', requireAuth, function(req, res, next) {
    User.addFollower(req, res, next);
  });
  /* End Folloer Roues */
};
