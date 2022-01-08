const BloodSugar = require ('../models/bloodsugar');

function index(req, res, next) {




    BloodSugar.find({}, function(err, bloodsugar) {
      res.render('bloodsugar/index', {bloodsugar});
  });
}

  function newReading (req, res, next){
    res.render('bloodsugar/new')
  };

function create (req, res, next) {
    const reading = new BloodSugar(req.body);
    reading.save (function(err, bloodsugar){
        if (err) return res.render('bloodsugar/new');
        console.log (reading)
        res.redirect(`/bloodsugar/${bloodsugar._id}`);

    })
}

function show (req, res, next) {
  BloodSugar.findById (req.params.id, function (err, bloodsugar){
    res.render('bloodsugar/show', {bloodsugar})
  })
}

function deleteDay(req, res){
  BloodSugar.findByIdAndDelete(req.params.id, function (err, bloodsugar){
    if (err) return res.redirect('/');
    res.redirect('/bloodsugar');
  });
}

module.exports =  {
    index, 
    new:newReading, 
    create, 
    show,
    delete:deleteDay
}