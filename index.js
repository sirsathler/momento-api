const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')


//ROUTES
const login = require('./routes/Auth');
const register  = require('./routes/Auth');

mongoose.Promise = global.Promise
mongoose.connect("mongodb+srv://matheus:DopKmdQrlSP7ddG6@momento.koyu9.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("Successfully Logged in MongoDB")
}).catch((err)=>{
    console.log("Error conecting to MongoDB! > " + err)
})


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


app.use('/', login);
app.use('/', register);


app.use('/', (req, res, next) => {
    res.status(200).send({
        Message: 'Hello World!',
    });
});

module.exports = app;