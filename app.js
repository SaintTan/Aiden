const express = require('express');
const flash = require('connect-flash-plus');
//require('dotenv').config();
const session = require("express-session");
var bodyParser = require('body-parser');
var cors = require('cors')

const passport = require('passport');
require('./config/passport')(passport);

const app = express();
app.use(cors({origin:["http://localhost:3000"],
            credentials:true,
            allowedHeaders:['Origin','X-Requested-With','Content-Type','Accept'],
            methods:['GET','PUT','POST','DELETE','OPTIONS'],
            preflightContinue:true}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
require('./models');

const morgan = require("morgan");

const PORT = process.env.PORT || 3000;
app.use(express.static('public'));
app.use(flash());

//sessions
app.use(session({secret:"bestest_coolest_secretest_key",
                resave:true,
                saveUninitialized: true}));

app.use(passport.initialize());
app.use(passport.session());

// set the view engine to ejs
app.set('view engine', 'ejs');

// get the user Router for login and signin

app.use(morgan('dev'));

//app.use('/uploads', express.static('uploads'));



// ==== Error Handling ====

// 404 Not Found
app.use((req, res, next) => {
    const error = new Error('404 Not Found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    console.log(error);
    res.render('error', {
        message: error.message,
        error: error
    })
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Sheltero is listening on port ' + PORT)
});
