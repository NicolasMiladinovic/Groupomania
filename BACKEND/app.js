const express = require('express');
const mysql = require('mysql');
const app = express();

let useremail = 'test1@a';
let userpassword = 'testpwd111';

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

let addUser = `INSERT INTO Users(email, password) VALUES ('${useremail}','${userpassword}')`; 

connection.query(addUser);

module.exports = app;