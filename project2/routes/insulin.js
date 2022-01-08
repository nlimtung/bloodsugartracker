var express = require('express');
var router = express.Router();
const insulinCtrl = require ('../controller/insulin')

router.post('/bloodsugar/:id/insulin', insulinCtrl.create);


module.exports = router;
