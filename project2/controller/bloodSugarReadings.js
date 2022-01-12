const BloodSugar = require ('../models/bloodsugar');
const User = require ('../models/user');


function index(req, res, next) {
  const loggedInUser = req.user
    BloodSugar.find({user: loggedInUser._id}, function(err, bloodsugar) {
      bloodsugar.filter(function (bs){
         return
      })
      res.render('bloodsugar/index', { bloodsugar,user: req.user});
  });
}

function newReading (req, res, next){
  res.render('bloodsugar/new', {user:req.user})
};

function create (req, res, next) {
  const newBloodSugar = new BloodSugar(req.body)
  newBloodSugar.user = req.user
  newBloodSugar.save().then(bloodsugar=>{
    res.redirect(`/bloodsugar/${bloodsugar._id}`)
  }).catch(err =>{
    res.redirect('bloodsugar/new')
  })

}


function show (req, res, next) {
  BloodSugar.findById (req.params.id, function (err, bloodsugar){
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