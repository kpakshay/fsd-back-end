var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/getblood', bloodModule.getblood);


router.get('/', function(req, res, next) {
    res.render('index page');
  });


module.exports = router;