const mongoose = require ('mongoose');
var findOrCreate = require('mongoose-findorcreate');
const {Schema} = mongoose;


const userSchema = new Schema(
    {
        googleId: String,


    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model ('User', userSchema);