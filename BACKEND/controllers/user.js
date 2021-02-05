const db = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const name = req.body.name;
            const firstname = req.body.firstname;
            const email = req.body.email;
            let sql = `INSERT INTO Users VALUES (NULL,` + db.escape(name) + `, ` + db.escape(firstname) + `,` + db.escape(email) + `, '${hash}', 0)`;
            db.query(sql, function (err, result) {
                if (err) {
                    console.log(err);
                    return res.status(400).json("error");
                } else {
                    console.log("1 user inserted");
                    db.query(`SELECT * FROM Users WHERE email = '${req.body.email}'`, function (err, result) {
                        return res.status(200).json({
                            token: jwt.sign(
                                { userId: result[0].id },
                                'groupomania_secret_token',
                                { expiresIn: '24h' }
                            )
                        });
                    });
                };
            });
        });
};


exports.login = (req, res, next) => {
    const email = req.body.email
    db.query(`SELECT * FROM Users WHERE email =` + db.escape(email), function (err, result) {
        if (result.length > 0) {
            bcrypt.compare(req.body.password, result[0].password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Wrong password' });
                    } else {
                        console.log("User connect");
                        return res.status(200).json({
                            token: jwt.sign(
                                { userId: result[0].id },
                                'groupomania_secret_token',
                                { expiresIn: '24h' }
                            )
                        });
                    };
                });
        }
        else {
            return res.status(404).json({ error: 'User not found' });
        };
    });
};

exports.deleteUser = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'groupomania_secret_token');
    const userId = decodedToken.userId;
    let sql = `DELETE FROM Users WHERE id=${userId}`;
    db.query(sql, function (err, result) {
        if (err) {
            console.log(err);
            return res.status(400).json("error");
        } else {
            console.log("User has been deleted");
            return res.status(200).json(result);
        };
    });
};
