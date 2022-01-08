const mongoose = require('mongoose');

// ESQUEMA
const CategorySchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        }
    },
    
    {
        timestamps: true, //con ésto, automáticamente los valores van a tener dos campos: fecha de creacion y fecha de actualizacion
        versionKey: false // deshabilita el versionamiento de los datos que viene por defecto en MongoDB
    }
);

// MODELO

const Category = new mongoose.model('Category',CategorySchema);

module.exports = {Category};