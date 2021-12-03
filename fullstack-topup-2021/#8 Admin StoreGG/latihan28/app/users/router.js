var express = require('express');
var router = express.Router();
const { viewSignin } = require('./controller');

/* GET home page. */
router.get('/', viewSignin);

module.exports = router;
