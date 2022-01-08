const mongoose = require('mongoose');

// ESQUEMA
const UserSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true,
            unique: true // para que el valor sea único
        },
        phoneNumber:{
            type: Number,
            default: 123456
        }
    },
    
    {
        timestamps: true, //con ésto, automáticamente los valores van a tener dos campos: fecha de creacion y fecha de actualizacion
        versionKey: false // deshabilita el versionamiento de los datos que viene por defecto en MongoDB
    }
);

// MODELO

const User = new mongoose.model('User',UserSchema);

module.exports = {User};