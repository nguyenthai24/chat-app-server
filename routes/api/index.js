const express = require('express');
const router = express.Router();

const get_all_user = require('../../controllers/api/get_all_user');
router.get('/all-user/:id', get_all_user);

module.exports = router;
