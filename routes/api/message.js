const express = require('express');
const router = express.Router();

const postAddMessage = require('../../controllers/api/message/post_add_message');
router.post('/message/add', postAddMessage);

const getAllMessage = require('../../controllers/api/message/get_all_message');
router.post('/message/get-all', getAllMessage);

module.exports = router;
  