const express = require('express');
const router = express.Router();

const HANDLERS = {
  get: require('./handlers/get'),
  create: require('./handlers/create'),
};

router.get('/:id', HANDLERS.get);
router.post('/', HANDLERS.create);

module.exports = router;
