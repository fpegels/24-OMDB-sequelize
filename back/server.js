const express = require('express');
const path = require('path');;
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require("express-session")
const passport = require("./config/passport")
const indexRouter = require('./routes/index');
const db = require("./config/db")

const app = express();

//Static files
app.use(express.static('public'));
//BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Morgan
app.use(morgan("dev"));

//Passport
 app.use(cookieParser());
 app.use(session({   name: 'omdb_session',
                     secret: 'cats',
                     resave: false,
                     saveUninitialized: false,
                     cookie: {
                         maxAge: 15000000
                     }
            }));
app.use(passport.initialize());
app.use(passport.session());

//Router 
app.use('/', indexRouter);

app.use(function (err, req, res, next) {
    console.error(err, err.stack);
    res.status(500).send(err);
});

const PORT = 1337
db.sync(  )
.then(function(){
    app.listen(PORT, function () {
        console.log('OMDB listening on ' + PORT);
      });
})
.catch(err => console.log(err))


module.exports = app;