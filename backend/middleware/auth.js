const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.RANDOM_TOKEN_SECRET);
        const userId = decodedToken.userId;
        console.log(process.env.RANDOM_TOKEN_SECRET);
        if (req.body.userId && req.body.userId !== userId) {
            throw '';
        } else {
            next();
        }
    } catch (error) {
        res.status(401).json({ error: error | 'Request not authenticated !' })
    }
};