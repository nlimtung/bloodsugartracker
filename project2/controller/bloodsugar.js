const BloodSugar = require ('../models/bloodsugar');

function index(req, res, next) {
    BloodSugar.find({}, function(err, bloodsugar) {
      res.render('bloodsugar/index', { bloodsugar,user: req.user});
  });
}

  function newReading (req, res, next){
    res.render('bloodsugar/new', {user:req.user})
  };

function create (req, res, next) {
  const reading = new BloodSugar(req.body);
  let newDate = reading.day
  console.log ('DATE' + newDate)

  BloodSugar.findOneAndUpdate(
    {day:newDate}, // find a document with that filter
    {day:newDate}, // document to insert when nothing was found
    {upsert: true, new: true, runValidators: true}, // options
    function (err, day) { // callback
        if (err) {
         res.redirect('bloodsugar/new');
          console.log (err)      
        } else {
          res.redirect(`/bloodsugar/${day._id}`,);
        }
    }
  );
}

function show (req, res, next) {
  BloodSugar.findById (req.params.id, function (err, bloodsugar){
    console.log(bloodsugar)
    if (err) return res.render('bloodsugar/new');

    res.render('bloodsugar/show', {bloodsugar, user: req.user})
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