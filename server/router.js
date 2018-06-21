const Authentication = require('./controllers/authentication');
const User = require('./controllers/user');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
  app.get('/user', requireAuth, function(req, res, next) {
    User.getUser(req, res, next);
  });
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);
};
