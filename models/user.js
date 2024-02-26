const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

// Define the User schema
const userSchema = new mongoose.Schema({
    username: String,       
    email: String,
    password: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});


  
  userSchema.methods.correctPassword = async function (
    candidatePassword,
    userPassword
  ) {
    return candidatePassword;
  };

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
