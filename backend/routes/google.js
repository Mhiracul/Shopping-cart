const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const jwt = require('jsonwebtoken');
const genAuthToken = require('../utils/genAuthToken')
const router = express.Router();
const { User } = require('../models/user');
const app = express();




app.use(passport.initialize());

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email']
}));
router.get("/logout", (req, res) => {
    req.logout();
    res.redirect(process.env.CLIENT_URL)

})
router.get("/login/success", (req, res) => {
    if(req.user){
          res.status(200).json({
            error: false,
            message: "Successfully Logged In",
            user:req.user,
          })
    } else{
        res.status(403).json({ error:true, message: "Not Authorized"});
    }
})
router.get("/login", (req, res) => {
    res.status(401).json({
        error:true,
        message: "Log in failure",
    })
})
router.get(
    '/google/callback',
    passport.authenticate('google', { successRedirect: process.env.client_URL, failureRedirect: '/login/failed' }),
    (req, res) => {
      const { token } = req.user;
      res.redirect('http://localhost:3001/shop?token=' + token);

    }
  );
  

passport.use(
    new GoogleStrategy(
        {
            clientID : process.env.GOOGLE_CLIENT_ID,
            clientSecret : process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: '/auth/google/callback',

        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                let user = await User.findOne({ email: profile.emails[0].value});
             
                if(!user) {
                    user = new User({
                        name: profile.displayName,
                        email: profile.emails[0].value,
                        authType: 'google',
                        googleId: profile.id,
                    });
                    await user.save();
                }
                const token = genAuthToken(user);
                done(null, {user, token});
            }catch(error) {
                done(error, null);
            }
        }
    )
);


module.exports = router;