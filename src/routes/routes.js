const express = require("express")
const {createUser,loginUser} = require("../controller/userController")
const {generateImage,getAllImage,deleteImage} = require("../controller/imageController")
const {Authentication,Authorization}= require("../middleware/auth")
const router = express.Router()


router.post("/createUser",createUser)
router.post("/loginUser",loginUser)


router.post("/createImage",Authentication,generateImage)
router.get("/getImages",Authentication,getAllImage)
router.delete("/deleteImage/:imageId/:id",Authentication,Authorization,deleteImage)

router.all("/*",(req,res)=>{
    // console.log("Plz enter valid route");
    res.status(400).send({status:false,message:"invalid route"})
})

module.exports = router