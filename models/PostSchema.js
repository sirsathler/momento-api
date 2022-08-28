// const { default: mongoose } = require('mongoose');
const moment = require('moment');
const mongoose = require('mongoose');
require('mongoose-long')(mongoose);
var Long = mongoose.Schema.Types.Long;

const reqString = {
    type: String,
    required: true
}

// const

const postSchema = new mongoose.Schema({
    user: {
        id: { type: String },
        username: { type: String },
        profilePic: { type: String }
    },
    postImgURL: reqString,
    expiration: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
})

module.exports = mongoose.model('Posts', postSchema)