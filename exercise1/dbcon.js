
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/data') //data
.then( ()=> console.log("connected to mongodb"))
.catch(err => console.log("could not connect mongo",err));


const dataSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
})


module.exports = mongoose.model('user',dataSchema);


