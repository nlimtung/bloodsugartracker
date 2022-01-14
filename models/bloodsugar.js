const mongoose = require ('mongoose');
const {Schema} = mongoose;


const readingSchema = new Schema (
    {

        time:  {
            type: String, 
        }, 
        mealTiming: {
            type: String, 
            enum: ['Before food', 'After food'], 
        }, 
        sugarReading: {
            type: Number, 
        
            required: true
        },
        comments: String,
})


const insulinSchema = new Schema(
    {
        insulinName : String, 
        units: Number, 
        time: String, 
        comments: String
    },
    {
        timestamps: true
    }
)


const bloodSugarSchema = new Schema(
    {
        day:  {
            type: Date, 
            required: true, 
            unique:true
        }, 
        insulin: [insulinSchema], 
        reading:[readingSchema],
        user:  { type: Schema.Types.ObjectId, ref: 'User'}

    },
    {
        timestamps: true
    }
)




module.exports = mongoose.model ('Bloodsugar', bloodSugarSchema);
