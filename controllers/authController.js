const User = require('../models/user');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError')
// const user = require('../models/user');

exports.signUp = catchAsync(async (req, res, next) => {
    const user = await User.create(req.body);

    res.status(201).json({
        status: "success",
        data: {
            user
        }
    })
    console.log(req.body);

})


exports.login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;
  
    // 1. Check if email and password exists
    if (!email || !password) {
      return next(new AppError("Please provide email and password!", 400));
    }
    // 2. Check lf user exists && password is correct
    const user = await User.findOne({ email }).select("+password");
  
    if (!user || !(await user.correctPassword(password, user.password))) {
      return next(new AppError("Incorrect email or password", 401));
    }
  
      // 3. if everything ok send token to client
  res.status(200).json({
    status: "success",
    data: {
      user
    }
     })
  });