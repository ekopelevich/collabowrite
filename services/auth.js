var route = require('express').Router();
var session = require('express-session');
var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;

module.exports = route;

route.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));
route.use(passport.initialize());
route.use(passport.session());
passport.serializeUser(function(user, done){
  done(null, user);
});
passport.deserializeUser(function(obj, done){
  done(null, obj);
});

passport.use(new TwitterStrategy({
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    callbackURL: "/auth/twitter/callback"
  },
  function(token, tokenSecret, profile, cb) {
    findOrCreate(profile, token, tokenSecret).then(function(user) {
      cb(null, user);
    }).catch(cb);
  }
));

route.get('/auth/twitter',
  passport.authenticate('twitter'));

route.get('/auth/twitter/callback',
  passport.authenticate('twitter'),
  function(req, res) {
    res.redirect('/');
  });

route.get('/auth/logout', function(req, res, next){
  req.logout();
  res.redirect('/');
})
