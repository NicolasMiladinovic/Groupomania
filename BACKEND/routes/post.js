const express = require('express');
const router = express.Router();

const postCtrl = require('../controllers/post');
const commCtrl = require('../controllers/comm');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');


// Route for posts
router.post('/', auth, multer, postCtrl.addpost);
router.get('/:id', auth, postCtrl.getonepost);
router.get('/', auth, postCtrl.getallposts);
router.delete('/:id', auth, postCtrl.deleteonepost);

//Route for comments
router.post('/:id', auth, commCtrl.addcomm);
router.get('/:id')
router.delete('/', auth, commCtrl.deletecomm);

module.exports = router;