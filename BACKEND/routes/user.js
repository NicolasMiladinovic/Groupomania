var mysql = require('mysql');
const bcrypt = require('bcrypt');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'nicolas',
    database: 'groupomania_db'
});
connection.connect(function (err) {
    if (!err) {
        console.log("Database is connected ... \n\n");
    } else {
        console.log("Error connecting database ... \n\n");
    };
});

exports.register = function (req, res) {
    const password = req.body.password;
    const encryptedPassword = bcrypt.hash(password, 2);

    var users = {
        "email": req.body.email,
        "password": encryptedPassword
    }

    connection.query('INSERT INTO Users SET ?', users, function (error, results, fields) {
        if (error) {
            console.log("error ocurred", error);
            res.send({
                "code": 400,
                "failed": "error ocurred"
            });
        } else {
            res.send({
                "code": 200,
                "success": "user registered sucessfully"
            });
        };
    });
};

exports.login = function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    connection.query('SELECT * FROM Users WHERE email = ?', [email], async function (error, results, fields) {
        if (error) {
            res.send({
                "code": 400,
                "failed": "error ocurred"
            });
        } else {
            if (results.length > 0) {
                const comparision = bcrypt.compare(password, results[0].password)
                if (comparision) {
                    res.send({
                        "code": 200,
                        "success": "login sucessfull"
                    });
                }
                else {
                    res.send({
                        "code": 204,
                        "success": "Email and password does not match"
                    });
                };
            }
            else {
                res.send({
                    "code": 206,
                    "success": "Email does not exits"
                });
            };
        };
    });
};