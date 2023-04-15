const imageModel = require("../models/imageModel")


const checkData = function(data){
    try {
        return imageModel.find(data)
    } catch (error) {
        return res.status(500).send({status:false,message:error.message})
    }
}

const createData = function(data){
    try {
        return imageModel.create(data)
    } catch (error) {
        return res.status(500).send({status:false,message:error.message})
    }
}


const checkUrl = function(data){
    try {
        return imageModel.findOne(data)
    } catch (error) {
        return res.status(500).send({status:false,message:error.message})
    }
}

const removeUrl = function(data,updateData){
    try {
        return imageModel.findOneAndUpdate(data,updateData,{new:true})
    } catch (error) {
        return res.status(500).send({status:false,message:error.message})
    }
}



module.exports = {checkData,createData,checkUrl,removeUrl}