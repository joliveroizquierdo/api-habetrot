const { Schema, model } = require('mongoose');

const activitySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            lowercase: true
        },
        gold_rating: {
            type: Number,
            trim: true,
            default: 0
        },
        silver_rating: {
            type: Number,
            trim: true,
            default: 0
        },
        user: { 
            type: Schema.Types.ObjectId, 
            ref: 'User',
            required: true
        }
    }, 
    {
        timestamps: true
    }
);

module.exports = model('Activity', activitySchema);