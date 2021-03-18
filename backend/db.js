const mysql = require('mysql');

require('dotenv').config();

const USER_DATABASE = process.env.USER_ENV
const PASSWORD_DATABASE = process.env.PASSWORD_ENV

const db = mysql.createConnection({
    host: 'localhost',
    user: USER_DATABASE,
    password: PASSWORD_DATABASE,
    database: 'Groupomania'
});
db.connect(function (err) {
    if (!err) {
        console.log("Database is connected ... \n\n");
    } else {
        console.log("Error connecting database ... \n\n");
    };
});

module.exports = db;