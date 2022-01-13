const BloodSugar = require ('../models/bloodsugar');

function index(req, res, next) {
    BloodSugar.find({}, function(err, bloodsugar) {
      res.render('index', {user:req.user, bloodsugar,});
  });
}

module.exports =  {
    index, 
}