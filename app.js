const mongoose = require('mongoose');
const MONGO_URI = 'mongodb://localhost:27017/mongo-practice'

// CONEXIÓN

mongoose.connect(MONGO_URI,
{useNewUrlParser: true, useUnifiedTopology: true},(err) => {
    if(err) {
        console.log('**ERROR DE CONEXION**');
    } else {
        console.log('**BD CONECTADA**');
    };
});

// ESQUEMAS

const UserSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        phoneNumber:{
            type: Number,
            default: 123456
        }
    },
    //con esto automáticamente los valores van a tener dos campos, fecha de creacion y fecha de actualizacion
    {
        timestamps: true 
    }
);

const PostSchema = new mongoose.Schema(
    {
        title:{
            type: String
        },
        description:{
            type: String,
            required: true
        },
        author:{
            type: mongoose.Types.ObjectId
        }
    },
    {
        timestamps: true
    }
);

// MODELOS

const User = new mongoose.model('User',UserSchema);
const Post = new mongoose.model('Post',PostSchema);


// INSERTAR DATOS

User.create(
    {
        name: 'Luluxita',
        email: 'lulux@text.com',
        phoneNumber: '123456'
    }
);