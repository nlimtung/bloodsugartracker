require ('dotenv').config();

require('./config/database');
const BloodSugar = require('./models/bloodsugar');


BloodSugar.deleteMany({})
.then(function(results) {
  console.log(results);
  process.exit();
});