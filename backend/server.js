const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const path = require('path');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization, HttpHeaders');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use('/auth', userRoutes);
app.use('/post', postRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));

/* app.get('/', (req, res) => {
    res.send('Hello World!');
}); */

app.listen(3000, function () {
    console.log('Listening on port 3000');
});