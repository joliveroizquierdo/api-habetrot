const { Schema, model } = require('mongoose');

const skillSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            lowercase: true
        },
        activity_id: { 
            type: Schema.Types.ObjectId, 
            ref: 'Activity',
            required: true
        }
    }, 
    {
        timestamps: true
    }
);

module.exports = model('Skill', skillSchema);