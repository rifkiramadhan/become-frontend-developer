var express = require('express');
var router = express.Router();
const { landingPage, detailPage, category } = require('./controller');

router.get('/landingpage', landingPage);
router.get('/:id/detail', detailPage);
router.get('/category', category);

module.exports = router;
