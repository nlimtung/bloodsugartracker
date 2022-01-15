const BloodSugar = require ('../models/bloodsugar');

function create(req, res) {
    BloodSugar.findById(req.params.id, function(err, bloodsugar) {
      bloodsugar.insulin.push(req.body);
      bloodsugar.save(function(err) {
        res.redirect(`/bloodsugar/${bloodsugar._id}`);
        console.log(err)
      });
    });
  }



 
module.exports =  {
  create,
    
}