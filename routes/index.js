const express = require('express');
const router = express.Router();

const authRoute = require('./auth');
router.use('/api', authRoute);


module.exports = router;