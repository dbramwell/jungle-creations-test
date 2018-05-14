var express = require('express');
var router = express.Router();
var travisAPI = require('../travis-api');

router.post('/', function(req, res) {
  travisAPI.startBuild().pipe(res);
});

module.exports = router;