const mongoose = require('mongoose');
//const bcrypt = require('bcryptjs');
require("dotenv").config();
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength:3,
    maxlength:30,
    
  },
  email: {
    type: String,
    unique: true,
    required: true,
    minlength:3,
    maxlength:200,
    
  },
  password: {
    type: String,
    required: true,
    minlength:3,
    maxlength:1024,
  },
  date:{
    type: Date,
    default:Date.now,
  },
  authType: {
    type: String,
    enum: ['local', 'google', 'facebook'],
    default: 'local',
  },
  googleId: {
    type: String,
  },
  facebookId: {
    type: String,
  },
});

const User = mongoose.model('User', userSchema);

exports.User = User;

