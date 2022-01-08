const mongoose = require('mongoose');

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
        timestamps: true,
        versionKey: false
    }
);


const Post = new mongoose.model('Post',PostSchema);

module.exports = {Post};