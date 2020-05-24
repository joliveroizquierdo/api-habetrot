const { Schema, model } = require('mongoose');//mandar los mensajes 

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'El nombre es necesario'],
            trim: true,
            lowercase: true
        },
        email: {
            type: String,
            required: [true, 'El correo es necesario'],
            trim: true,
            lowercase: true
        },
        web: {
            type: String,
            trim: true,
            lowercase: true
        },
        phone: {
            type: Number,
            required: [true, 'El teléfono es necesario'],
            trim: true
        },
        general_gold_rating: {
            type: Number,
            trim: true,
            default: 0
        },
        general_silver_rating: {
            type: Number,
            trim: true,
            default: 0
        },
        availability: {//establecer mensajes en en caso de que ingresen una disponibilidad diferente a las que se van a manejar
            type: String,
            enum: ['local', 'nacional', 'internacional'],
            default: 'local'
        },
        location: {
            type: String,
            required: [true, 'El ubicación es necesaria'],
            trim: true,
            lowercase: true
        }
    }, 
    {
        timestamps: true
    }
);

module.exports = model('User', userSchema);