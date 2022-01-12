const mongoose = require ('mongoose');
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