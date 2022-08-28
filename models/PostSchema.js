// const { default: mongoose } = require('mongoose');
const mongoose = require('mongoose');
require('mongoose-long')(mongoose);
var Long = mongoose.Schema.Types.Long;

const reqString = {
    type: String,
    required: true
}

const postSchema = new mongoose.Schema({
    'ownerId': {
        type: Long,
        required: true,
    },
    'postImgURL': reqString,
    'postDate': {
        type: Date,
        default: Date.now(),
        required: true
    },
    'description': {
        type: String
    }
})

module.exports = mongoose.model('Posts', postSchema)