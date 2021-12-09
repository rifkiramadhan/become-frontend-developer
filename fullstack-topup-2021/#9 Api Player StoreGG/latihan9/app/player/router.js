var express = require('express');
var router = express.Router();
const { dashboard, landingPage, detailPage, category, checkout, history, historyDetail } = require('./controller');
const { isLoginPlayer } = require('../middleware/auth');

router.get('/landingpage', landingPage);
router.get('/:id/detail', detailPage);
router.get('/category', category);
router.post('/checkout', isLoginPlayer, checkout);
router.get('/history', isLoginPlayer, history);
router.get('/history/:id/detail', isLoginPlayer, historyDetail);
router.get('/dashboard', isLoginPlayer, dashboard);

module.exports = router;
