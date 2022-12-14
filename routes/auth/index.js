const express = require('express');
const router = express.Router();

const post_register_user = require('../../controllers/app_auth/post_register');
router.post('/register', post_register_user);

const post_login_user = require('../../controllers/app_auth/post_login');
router.post('/login', post_login_user);

const post_set_avatar =  require('../../controllers/app_auth/post_set_avatar');
router.post('/set-avatar/:id', post_set_avatar);

module.exports = router;
