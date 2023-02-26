const { request, response } = require('express')
const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const jwt = require('jsonwebtoken');


//Google Auth Routes
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email']
}));
router.get(
    '/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
      const { token } = req.signedUpUser;
      res.redirect(`/dashboard?token=${token}`);
    }
  );
  
  // Facebook Auth Routes
  router.get(
    '/auth/facebook',
    passport.authenticate('facebook', { scope: ['email'] })
  );
  
  router.get(
    '/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    (req, res) => {
        const { token } = req.signedUpUser;
    res.redirect(`/dashboard?token=${token}`);
  }
);
router.post('/signUp', (req, res) => {
    
    const signedUpUser = new signUpTemplateCopy({
        fullName: req.body.fullName,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    signedUpUser.save()
      .then(data => {
        res.json(data)
      })
      .catch(error => {
        res.json( error);
      });
  });

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const signedUpUser = await signUpTemplateCopy.findByCredentials(email, password);

    if (!signedUpUser) {
      return res.status(401).json('Invalid login credentials');
    }

    const token = jwt.sign({ signedUpUserId: signedUpUser.id }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
}
});

/*router.post('/payments', async (req, res) => {
    try {
      const paymentReference = `PAY-${Date.now()}`;
      const { amount, email, phone, fullName } = req.body;
  
      const payment = await monnify.initializePayment({
        paymentReference,
        amount,
        customerName: fullName,
        customerEmail: email,
        customerMobileNumber: phone,
        paymentDescription: 'Payment for services',
        currencyCode: 'NGN',
        redirectUrl: 'http://localhost:3000/payment-successful',
        paymentMethods: ['CARD', 'BANK_TRANSFER']
      });
  
      res.json({ payment });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }); */
  

module.exports = router