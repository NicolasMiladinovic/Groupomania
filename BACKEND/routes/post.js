const express = require('express');
const router = express.Router();

const postCtrl = require('../controllers/post');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/', auth, multer, postCtrl.addpost);
router.get('/:id', auth, postCtrl.getonepost);
router.get('/', auth, postCtrl.getallposts);
router.delete('/', auth, postCtrl.deleteonepost);

module.exports = router;