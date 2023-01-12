const express = require('express');
const router = express.Router();

const auth_register = require('../../controllers/auth/post_register');
router.post('/auth/register', auth_register);

module.exports = router;
