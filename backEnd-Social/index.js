const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');

const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

const app = express();
dotenv.config();

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true})
    .then (() => console.info('Connected To MongoDb :)') )
    .catch((error) => console.error(`Couldn't Connect to MongoDB ${error}`))

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);


app.listen(8800, () => {
    console.log('Backend Server Running');
})