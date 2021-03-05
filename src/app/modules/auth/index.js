const express = require('express');
const router = express.Router();

const HANDLERS = {
  get: require('./handlers/get'),
};

router.get('/:id', HANDLERS.get);

module.exports = router;
