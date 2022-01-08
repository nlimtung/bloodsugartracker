var express = require('express');
var router = express.Router();
const bloodSugarCtrl = require ('../controller/bloodsugar')

router.get('/', bloodSugarCtrl.index);
router.get('/new', bloodSugarCtrl.new);
router.post('/', bloodSugarCtrl.create);


// router.get('/', function(req, res) {
//     data = [];
//     console.log('doughnut data',data);
//     res.render('dashboard/doughnut', {
//       title:'My First Doughnut Chart', 
//       datai: JSON.stringify(data)
//     });
//   });

router.get ('/:id', bloodSugarCtrl.show);
router.delete('/:id', bloodSugarCtrl.delete)



module.exports = router;
