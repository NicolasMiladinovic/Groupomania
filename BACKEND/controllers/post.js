const db = require('../db');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const { title } = require('process');

exports.addpost = (req, res, next) => {
        var title = req.body.title;
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'groupomania_secret_token');
        const userId = decodedToken.userId;
        var imgUrl = "url de l'image";
        db.query('INSERT INTO Posts VALUES (NULL, ?, ?, ?, NOW())', [userId, title, imgUrl], function (err, result) {
            if (err) {
                console.log(err);
                return res.status(400).json("erreur");
            } else {
                console.log("1 post inserted");
                res.status(201).json({ message: "1 posts inserted" });
            }
        })
}

/* exports.addpost = (req, res, next) => {
        var title = req.body.title;
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'groupomania_secret_token');
        const userId = decodedToken.userId;
        var imgUrl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
        db.query('INSERT INTO Posts VALUES (NULL, ?, ?, ?, NOW())', [userId, title, imgUrl], function (err, result) {
            if (err) {
                console.log(err);
                return res.status(400).json("erreur");
            } else {
                console.log("1 post inserted");
                res.status(201).json({ message: "1 posts inserted" });
            }
        })
        res.status(401).json({
            error: new Error('Session invalide')
        })
} */