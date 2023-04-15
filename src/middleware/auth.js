const mongoose =require("mongoose")
const jwt = require("jsonwebtoken")
const imageModel = require("../models/imageModel")


const Authentication = async function(req,res,next){
    try {
      
      let token = req.headers["authorization"]
         
      if(!token) return res.status(400).send({status:false,message:"Token is mandatory"})
        token = token.slice(7, token.length)
  
        let decode = jwt.verify(token, "newKey");
     
        req.decode= decode
        next();
    } catch (error) {
      console.log("error from authentication", error.message);
      res.status(500).send(error.message)
    }  

   

}


const Authorization = async function (req,res,next){

  try {
          let {imageId} = req.params
         
          const images= await imageModel.findOne({imageId:imageId, isDeleted:false})
       
          let userId= images.userId

          if(userId!=req.decode.userId) return res.status(403).send({status: false, error: "You are not autherised"})  
          next();
    
  } catch (error) {
    console.log("error from Authorization", error.message);
    res.status(500).send(error.message)
  }

  } 



  module.exports= {Authentication,Authorization}
    