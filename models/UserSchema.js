// const { default: mongoose } = require('mongoose');
const mongoose = require('mongoose');
require('mongoose-long')(mongoose);
var Long = mongoose.Schema.Types.Long;

const reqString = {
    type: String,
    required: true
}

const userSchema = new mongoose.Schema({
    'username': {
        type: String,
        required: true,
        unique: true
    },
    'password': reqString,
    'name': {
        type: String,
        default: 'Momento',
        required: true
    },
    'surname': {
        type: String,
        default: 'User',
        required: true,
    },
    'profilepic': {
        type: String,
        required: true,
        default: 'https://imgur.com/ax98YzW.png'
    },
    'profilecover': {
        type: String,
        required: true,
        default: 'https://imgur.com/qb2S2mU.png'
    },
    'collage': {
        type: [String],
        blackbox: true,
        default: [
            'https://imgur.com/bOD58pE.png',
            'https://imgur.com/6aMb5b9.png',
            'https://imgur.com/6aMb5b9.png',
            'https://imgur.com/6aMb5b9.png',
            'https://imgur.com/6aMb5b9.png',
        ],
        required: true
    },
    'bio': {
        type: String,
        required: true,
        default: 'O seu momento!'
    },
    'followers': {
        type: [Long],
        required: true,
        default: []
    },
    'momentos': {
        type: [Long],
        required: true,
        default: []
    },
})

module.exports = mongoose.model('Users', userSchema)