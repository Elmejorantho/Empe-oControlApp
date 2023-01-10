require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const UsersRouter = require('./controllers/users');
const loginRouter = require('./controllers/login')
const cookieParser = require('cookie-parser');
const empeñoRouter = require('./controllers/empeñoItem')
const cors = require('cors');
const path = require('path');
const authExtractor = require('./middleware/auth');
const logoutRouter = require('./controllers/logout');

const { MONGO_URI } = require('./config');


(async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Conecto a MongoDB');
    } catch (error) {
        console.log('No Conecto a MongoDB');
    }
    
})();

app.use(morgan('tiny'));
app.use(express.json())
app.use(cors());
app.use(cookieParser());
app.use('/api/users', UsersRouter);
app.use('/api/login', loginRouter);
app.use('/api/logout', logoutRouter);
app.use('/api/empeñoItem', authExtractor , empeñoRouter);

//Frontend routes
app.use('/', express.static(path.resolve(__dirname, 'views', 'home')));
app.use('/singup', express.static(path.resolve(__dirname, 'views', 'singup')));
app.use('/login', express.static(path.resolve(__dirname, 'views', 'login')));
app.use('/app/:id', express.static(path.resolve(__dirname, 'views', 'app')));
app.use('/img', express.static(path.resolve(__dirname, 'img')));

module.exports = app;