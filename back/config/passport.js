const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const User = require("../models/users")

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ where: {username: username}})
    .then((user =>{
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    }))
    .catch(err => console.log(err))
    }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  console.log(id)
  User.findByPk(id).then(user => {done(null, user)}).catch(err => console.error(err))
  });

module.exports = passport;