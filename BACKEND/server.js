let express = require('express');
let log = require('./routes/user');
let bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

let router = express.Router();// test route

router.get('/', function(req, res) {
    res.json({ message: 'welcome to our upload module apis' });
});//route to handle user registration

router.post('/register',log.register);
router.post('/login',log.login);

app.use('/api', router);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Listening on port 3000');
});



/* const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

const userRoutes = require('./routes/user');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "nicolas",
    database: "groupomania_db"
});

app.use(bodyParser.json());app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

connection.connect(function (err) {
    if (err) throw err;
    console.log('Connected to Groupomania Database');
});

app.use(bodyParser.json());

app.use('/api/auth', userRoutes);

app.listen(3000, function () {
    console.log('Listening on port 3000');
});

module.exports = app; */