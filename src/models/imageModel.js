const mongoose = require('mongoose')
const shortid = require("shortid")

const imageSchema = new mongoose.Schema({
    imageId: {
        type: String,
        default: shortid.generate
      },
    userId:{
        type:String,
        ref:'user'
    },
    prompt:{
        type:String
    },
   
    imageUrl:{
        type:[Object]////[{key,url},{{key,url}},{{key,url}}]
    },
    
    isDeleted:{
        type:Boolean,
        default:false
    }
},{timestamps:true})


module.exports = mongoose.model('image',imageSchema)