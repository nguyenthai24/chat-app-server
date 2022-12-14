const express = require('express');
const router = express.Router();

const authRoute = require('./auth');
router.use('/auth', authRoute);

const apiRoute = require('./api');
router.use('/api', apiRoute)

module.exports = router;