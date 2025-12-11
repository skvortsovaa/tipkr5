const express = require('express');
const router = express.Router();
const avatarController = require('../controllers/avatarController');

router.get('/random', avatarController.getRandomAvatar);
router.get('/', avatarController.getAllAvatars);
router.get('/:id', avatarController.getAvatarById);
router.post('/', avatarController.createAvatar);
router.put('/:id', avatarController.updateAvatar);
router.delete('/:id', avatarController.deleteAvatar);

module.exports = router;
