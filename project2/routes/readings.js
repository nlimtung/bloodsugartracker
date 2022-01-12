var express = require('express');
var router = express.Router();
const readingCtrl = require ('../controller/readings')


router.post('/bloodsugar/:id/reading', readingCtrl.create);


module.exports = router;
