const express = require('express');
const router = express.Router();

const postCtrl = require('../controllers/post');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/', multer, auth, postCtrl.addpost);
router.get('/:id', auth, postCtrl.getonepost);

module.exports = router;