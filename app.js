const { User } = require("./UserSchema");
const mongoose = require('mongoose');
const { Post } = require("./PostSchema");
const MONGO_URI = 'mongodb://localhost:27017/mongo-practice'

// CONEXIÓN CON LA BDD

mongoose.connect(MONGO_URI,
{useNewUrlParser: true, useUnifiedTopology: true},(err) => {
    if(err) {
        console.log('**ERROR DE CONEXION**');
    } else {
        console.log('**BD CONECTADA**');
    };
});

/* MONGOOSE QUERIES -> Los modelos de mongoose proveen funciones 
que sirven para desarrollar operaciones CRUD */


// INSERTAR DATOS EN LA BDD

const createUser = () => {
    User.create(
        {
            name: 'Luluxita',
            email: 'lulux@text.com',
            phoneNumber: '123456'
        }
    );
};

//createUser();

const createPost = () => {

    const PostList = [
        /*{
            title: 'Mi primer post',
            description: 'Mi primer post creado en la base de datos MongoDB',
            author: mongoose.Types.ObjectId("61d7a785457fed8be9f00ba0")
        },
        {
            title: 'Mi segundo post',
            description: 'Mi segundo post creado en la base de datos MongoDB',
            author: mongoose.Types.ObjectId("61d7a785457fed8be9f00ba0")
        }*/
        {
            title: 'Post para eliminar',
            description: 'djjhd',
            author: mongoose.Types.ObjectId("61d7a785457fed8be9f00ba0")
        },
        {
            title: 'Post para eliminar 2',
            description: 'djjhd 13',
            author: mongoose.Types.ObjectId("61d7a785457fed8be9f00ba0")
        }
    ];

    Post.insertMany(PostList);
};

//createPost();

// BUSCAR DATOS EN LA BDD

const findById = async () => {
    const user = await User.findById("61d7a785457fed8be9f00ba0");
    console.log(user);
};

//findById();

const searchByMatchOne = async () => {
    const post = await Post.findOne(
        {
            title: 'Mi primer post'
        }
    );
    console.log('resultado:   ',post);
}

//searchByMatchOne();

const searchByMatchAll = async () => {
    const result = await Post.find({
        title:{
            $eq: 'Mi primer post' //operador de mongo
        }
    });
    console.log('resultado:     ',result)
};

//searchByMatchAll();

const searchOrCreate = async () => {
    const post = await Post.findOneAndUpdate(
        {
            title: 'Mi tercer post'
        },
        {
            description: 'Me generé automáticamente.',
            author: mongoose.Types.ObjectId("61d7a785457fed8be9f00ba0")
        },
        {
            new: true,
            upsert: true
        }
    );
    console.log(post);
}

//searchOrCreate();

// MODIFICAR DATOS EXISTENTES

const editarPublicacion = async () => {
    const resultado = await Post.updateOne(
        {
            title: 'Mi tercer post'
        },
        {
            $set: {
                title: 'Mi tercer post (EDITADO)',
                description: 'Me generé automáticamente (EDITADO)'
            }
        }
    );
    console.log(resultado);
};

//editarPublicacion();

const editarPublicaciones = async () => {
    const resultado = await Post.updateMany(
        {
            title: {
                $ne: 'Mi tercer post' // Va a editar todos menos éste
            }
        },
        {
            $set: {
                title: '(EDITADO)',
                description: '(EDITADO)'
            }
        }
    );
    console.log(resultado);
};

//editarPublicaciones();

// ELIMINAR DATOS EXISTENTES

const eliminarPublicacion = async () => {
    const resultado = await Post.deleteOne(
        {
            _id: mongoose.Types.ObjectId("61d9c94faa8af23249ea827e")
        }
    );
    console.log(resultado);
}

//eliminarPublicacion();

const eliminarPublicaciones = async () => {
    const resultado = await Post.deleteMany(
        {
            title: 'Post para eliminar'
        }
    );
    console.log(resultado);
}

//eliminarPublicaciones();