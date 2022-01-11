const mongoose = require ('mongoose');
const {Schema} = mongoose;


const readingSchema = new Schema (
    {

        time:  {
            type: String, 
        }, 
        mealTiming: {
            type: String, 
            enum: ['Preprandial', 'Postprandial'], 
        }, 
        sugarReading: {
            type: Number, 
            min: 3.0, 
            max: 15.0, 
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
        }, 
        insulin: [insulinSchema], 
        reading:[readingSchema]
    },
    {
        timestamps: true
    }
)


module.exports = mongoose.model ('Bloodsugar', bloodSugarSchema);