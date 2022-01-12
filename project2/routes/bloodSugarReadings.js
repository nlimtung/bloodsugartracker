var express = require('express');
var router = express.Router();
const bloodSugarCtrl = require ('../controller/bloodSugarReadings')

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }


router.get('/',isLoggedIn, bloodSugarCtrl.index);
router.get('/new',isLoggedIn,  bloodSugarCtrl.new);
router.post('/', isLoggedIn, bloodSugarCtrl.create);
router.get ('/:id', bloodSugarCtrl.show);
router.delete('/:id', bloodSugarCtrl.delete)



module.exports = router;
