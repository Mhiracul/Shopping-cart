/*const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
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

   signUpTemplate.statics.findByCredentials = async (email, password) => {
        const user = await User.findOne({ email });
      
        if (!user) {
          throw new Error('Invalid login credentials');
        }
      
        const isMatch = await bcrypt.compare(password, user.password);
      
        if (!isMatch) {
          throw new Error('Invalid login credentials');
        }
      
        return user;
      };
      
module.exports = mongoose.model('user', signUpTemplate) */