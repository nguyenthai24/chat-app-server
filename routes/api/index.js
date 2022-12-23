const express = require('express');
const router = express.Router();

const get_all_user = require('../../controllers/api/user/get_all_user');
router.get('/all-user/:id', get_all_user);

const messageRoute = require('./message');
router.use(messageRoute);

module.exports = router;
