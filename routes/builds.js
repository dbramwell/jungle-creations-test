var express = require('express');
var router = express.Router();
var travisAPI = require('../travis-api');

router.get('/', function(req, res, next) {
  travisAPI.getBuilds().pipe(res);
});

module.exports = router;