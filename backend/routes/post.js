const express = require('express');
const router = express.Router();

const postCtrl = require('../controllers/post');
const commCtrl = require('../controllers/comm');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');


// Route for posts
router.post('/', auth, multer, postCtrl.addpost);
router.get('/:id', postCtrl.getonepost);
router.get('/', postCtrl.getallposts);
router.delete('/:id', auth, postCtrl.deleteonepost);

//Route for comments
router.post('/:id/reply', auth, commCtrl.addcomm);
router.get('/:id/reply', commCtrl.getallcomms);
router.post('/reply', auth, commCtrl.deletecomm);

module.exports = router;