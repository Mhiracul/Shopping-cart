const express = require('express');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const jwt = require('jsonwebtoken');
const genAuthToken = require('../utils/genAuthToken')
const router = express.Router();
const { User } = require('../models/user')
const app = express();




  app.use(passport.initialize());
 router.get(
    '/',
    passport.authenticate('facebook', { scope: ['email'] })
  );
  
  router.get(
    '/',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    (req, res) => {
        const { token } = req.user;
    res.redirect(`/cart?token=${token}`);
  }
);

  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: '/api/facebook/callback',
        profileFields: ['id', 'displayName', 'email'],
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          let user = await User.findOne({ email: profile.emails[0].value });
    
          if (!user) {
            user = new User({
              name: profile.displayName,
              email: profile.emails[0].value,
              authType: 'facebook',
              facebookId: profile.id,
            });
            await user.save();
          }
    
          const token = genAuthToken(user)
          done(null, { user, token });
        } catch (error) {
            done(error, null);
          }
        }
      )
    );
    

  module.exports = router;