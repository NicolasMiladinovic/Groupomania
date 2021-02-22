const db = require('../db');
const jwt = require('jsonwebtoken');
const fs = require('fs');

exports.addcomm = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'groupomania_secret_token');
    const userId = decodedToken.userId;
    const post_id = req.params.id;
    const content = req.body.content;
    db.query(`INSERT INTO Comms VALUES (NULL, ?, ?, NOW(), ?)`, [userId, post_id, content], function (err, result) {
        if (err) {
            console.log(err);
            return res.status(400).json("error");
        } else {
            console.log("1 comm inserted");
            res.status(201).json({ message: "1 comm inserted" });
        }
    });
};

exports.getallcomms = (req, res, next) => {
    const post_id = req.params.id;
    db.query(`SELECT Users.name, Users.firstname, Comms.id, Comms.content, Comms.date, Comms.user_id FROM Users INNER JOIN Comms ON Users.id = Comms.post_id`, function (err, result) {
        if (err) {
            console.log(err);
            return res.status(400).json("error");
        } else {
            console.log("All comms selected");
            res.status(201).json(result);
        }
    });
};

exports.deletecomm = (req, res, next) => {
    /*  const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'groupomania_secret_token'); */
    const comm_id = req.params.id;
    let sql = `DELETE FROM Comms WHERE id=${comm_id}`;
    db.query(sql, function (err, result) {
        if (err) {
            console.log(err);
            return res.status(400).json("error");
        } else {
            console.log("Camm has been deleted");
            return res.status(200).json(result);
        };
    });
};