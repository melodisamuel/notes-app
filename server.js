const mongoose = require('mongoose');
const dotenv = require('dotenv')

const app = require('./app');

// Loading env 
dotenv.config({ path: './config.env' })


// connect to Db 
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {}).then(() => console.log('DB connection succesful'));

// PORt 
const port = process.env.PORT || 5000;

// Server
const server = app.listen(port, () => {
    console.log(`App running on ${port}`);
})