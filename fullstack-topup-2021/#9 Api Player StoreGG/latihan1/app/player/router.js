var express = require('express');
var router = express.Router();
const { landingPage } = require('./controller');

router.get('/landingpage', landingPage);

module.exports = router;
