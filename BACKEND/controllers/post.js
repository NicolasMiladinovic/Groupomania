const db = require('../db');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const { title } = require('process');

exports.addpost = (req, res, next) => {
    let title = req.body.title;
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'groupomania_secret_token');
    const userId = decodedToken.userId;
    let imgUrl = "url de l'image";
    db.query(`INSERT INTO Posts VALUES (NULL, ?, ?, ?, NOW())`, [userId, title, imgUrl], function (err, result) {
        if (err) {
            console.log(err);
            return res.status(400).json("erreur");
        } else {
            console.log("1 post inserted");
            res.status(201).json({ message: "1 post inserted" });
        }
    })
};
/* let imgUrl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`; */


exports.getonepost = (req, res, next) => {
    /*     const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'groupomania_secret_token');
        const userId = decodedToken.userId; */
    let post_id = req.params.id;
    db.query(`SELECT Users.name, Users.firstname, Posts.id, Posts.title, Posts.imgURL, Posts.date, Posts.user_id FROM Users INNER JOIN Posts ON Users.id = Posts.user_id WHERE Posts.id = ?`, [post_id], function (err, result) {
        if (err) {
            console.log(err);
            return res.status(400).json("erreur");
        } else {
            res.status(201).json({ message: "1 post selected" });
        }
    });
};