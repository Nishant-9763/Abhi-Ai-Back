const mongoose = require("mongoose");
const shortid =require('shortid')


const userSchema = new mongoose.Schema({
userId: {
        type: String,
        default: shortid.generate
},
name:{
    type:String,
     required: true, 
    trim:true
}, 
phone_number:{
    type:String,
     required: true, 
    trim:true
},   
email: { 
    type: String,
     required: true,
      unique: true,
       trim:true
    },
password: { 
    type: String, 
    required: true, 
    trim:true
    }
},{timestamps:true})


module.exports = mongoose.model("user",userSchema)