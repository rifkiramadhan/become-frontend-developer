var express = require('express');
var router = express.Router();
const { landingPage, detailPage, category, checkout } = require('./controller');
const { isLoginPlayer } = require('../middleware/auth');

router.get('/landingpage', landingPage);
router.get('/:id/detail', detailPage);
router.get('/category', category);
router.post('/checkout', isLoginPlayer, checkout);

module.exports = router;
