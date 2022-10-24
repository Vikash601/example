const mongoose = require('mongoose')
const Contact = mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    query :String

})

module.exports=mongoose.model("queries", Contact)