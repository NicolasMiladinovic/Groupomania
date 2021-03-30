const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/delete', auth, userCtrl.deleteuser);
router.get('/', auth, userCtrl.getoneuser);
router.get('/profile/:id', userCtrl.getotheruser);
router.post('/modify', auth, userCtrl.modifyuser);

module.exports = router;