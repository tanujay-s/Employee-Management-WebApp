var express = require('express');
var dotenv = require('dotenv');
var {connectDb} = require('./utils/db');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var session = require('express-session');
var MongoStore = require('connect-mongo');

dotenv.config();
var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var registerRouter = require('./routes/register');
var loginRouter = require('./routes/login');
var logoutRouter = require('./routes/logout');
var employeeRouter = require('./routes/employee');


app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGODB_URL }),
    cookie: { secure: false, maxAge: 1000 * 60 * 60 * 24 } // 1 day
}));

connectDb();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use('/register',registerRouter);
app.use('/login',loginRouter);
app.use('/logout',logoutRouter);
app.use('/employee',employeeRouter);



const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`Server started on port: ${port}`);
});

module.exports = app;