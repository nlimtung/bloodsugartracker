var express = require('express');
var router = express.Router();
const readingCtrl = require ('../controller/reading')

router.post('/bloodsugar/:id/reading', readingCtrl.create);


module.exports = router;
