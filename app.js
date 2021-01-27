const express = require('express');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "nicolas",
    database: "groupomania_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log('Connected to Groupomania Database');
});

module.exports = app;