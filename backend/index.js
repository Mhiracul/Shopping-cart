const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const passport = require('passport')
const GoogleStrategy = require ('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const register = require('./routes/register')
const login = require('./routes/login')
const google = require('./routes/google')
const facebook = require('./routes/facebook')
dotenv.config();

app.use(express.json())
app.use(cors())
//app.use('/', routeUrls);
app.use("/api/register", register);
app.use("/api/login", login);
app.use("/auth", google);


app.use(passport.initialize());
app.use(passport.session());
app.use("/api/facebook", facebook);
app.get("/", (req, res) => {
  res.send("Welcome");
});
const port = process.env.PORT || 4000;
const mongo = process.env.MONGODB_URI


mongoose.connect(mongo, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connection successful"))
.catch(() => console.log("MongoDB connection failed"))
  
 
app.use(passport.initialize());



app.listen(port, () => console.log(`Server running on port ${port}`));

