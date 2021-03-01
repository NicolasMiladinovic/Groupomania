const db = require('../db');
const jwt = require('jsonwebtoken');
const fs = require('fs');


exports.addpost = (req, res, next) => {
    let title = req.body.title;
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'groupomania_secret_token');
    const userId = decodedToken.userId;
    let imgURL = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
    db.query(`INSERT INTO Posts VALUES (NULL, ?, ?, ?, NOW())`, [userId, title, imgURL], function (err, result) {
        if (err) {
            console.log(err);
            return res.status(400).json("error");
        } else {
            console.log("1 post inserted");
            res.status(201).json({ message: "1 post inserted" });
        }
    });
};

exports.getonepost = (req, res, next) => {
    let post_id = req.params.id;
    db.query(`SELECT Users.pseudo, Users.name, Users.firstname, Posts.id, Posts.title, Posts.imgURL, Posts.date, Posts.user_id FROM Users INNER JOIN Posts ON Users.id = Posts.user_id WHERE Posts.id = ?`, [post_id], function (err, result) {
        if (err) {
            console.log(err);
            return res.status(400).json("error");
        } else {
            res.status(201).json(result);
        }
    });
};

exports.getallposts = (req, res, next) => {
    db.query(`SELECT Users.pseudo, Posts.id, Posts.title, Posts.imgURL, Posts.date, Posts.user_id FROM Users INNER JOIN Posts ON Users.id = Posts.user_id`, function (err, result) {
        if (err) {
            console.log(err);
            return res.status(400).json("error");
        } else {
            res.status(201).json(result);
        }
    });
};

exports.deleteonepost = (req, res, next) => {
/*  const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'groupomania_secret_token'); */
    const post_id = req.params.id;
    let sql = `DELETE FROM Posts WHERE id=${post_id}`;
    db.query(sql, function (err, result) {
        if (err) {
            console.log(err);
            return res.status(400).json("error");
        } else {
            console.log("Post has been deleted");
            return res.status(200).json(result);
        };
    });
};