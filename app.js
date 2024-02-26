const express = require('express');
const morgan = require('morgan');
const userRouter = require('./routes/userRoutes');
const noteRouter = require('./routes/notesRoutes');
const ErrorHandler = require('./controllers/errorController');
const AppError = require('./utils/appError')




const app = express();


// MIDDLEWARES
app.use(express.json({ limit: '10kb' }));

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// Routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/note", noteRouter);


// Handling unhandled routes 
app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`))
});

// app.use(ErrorHandler);

module.exports = app;
