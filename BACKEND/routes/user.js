const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.delete('/', auth, userCtrl.deleteuser);
router.get('/:id', auth, userCtrl.getoneuser);

module.exports = router;