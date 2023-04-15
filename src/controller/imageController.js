const { Configuration, OpenAIApi } = require("openai");
const cloudinary = require('cloudinary').v2;
const {createData,checkData,checkUrl,removeUrl} = require("../services/imageService")


 // Configuration  of "Cloudinary" //
 cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET
  });


// Configuration of "openAi" //
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);


  const generateImage = async function(req,res){
    try {
        const {prompt,size} = req.body

        const imageSize  = size == 'small' ? '256x256' : size == 'medium' ? '512x512' :  size == 'large' ? '1024x1024' : '512x512'
        const aiResponse = await openai.createImage({
            prompt:prompt,
            n:3,
            size:imageSize,
            response_format:'url'
        }) 
        // console.log(aiResponse.data.data);
        const image = aiResponse.data.data

        let cloudUrl
        let imageUrl =[]
         
        for(let i=0;i<image.length;i++){
           cloudUrl =  await cloudinary.uploader.upload(image[i].url,{public_id: Date.now()})  
           const {secure_url,public_id} = cloudUrl
          let obj ={
            url :secure_url,
            id : public_id
          }
           imageUrl.push(obj)
          //  console.log(cloudUrl);
        } 
                  
       let postDetails = {prompt,imageUrl:imageUrl,userId:req.decode.userId ,size:size}   //userId:req.decode.userId 
  
       let finalData = await createData(postDetails)

        return  res.send({isSuccess: true,message: "Successfully uploaded image.",data:finalData})


    } catch (error) {
        console.log("error from generateImage :-",error.message);
      return  res.status(500).send({status:false,message:"This request is not available yet",error:error.message})
    }
  }


 const getAllImage = async function(req,res){
  try {
        const userId = req.decode.userId ///-------------------------------------------1
        const data = {userId:userId, isDeleted:false}
        const finalData = await checkData(data) ////-userId:userId,----------------------------------3
        return res.send({status:true,data:finalData})
    
  } catch (error) {
    console.log("error from getAllImage :-",error.message);
      return  res.status(500).send({status:false,Error:error.message})
  }

  }



 const deleteImage = async function(req,res){
  try {
          const {imageId,id} = req.params

          const data = {imageId:imageId,isDeleted:false}
          const finalUrl = await checkUrl(data)

          let abhiKaUrl;
          for(let i=0;i<finalUrl.imageUrl.length;i++){
            if(finalUrl.imageUrl[i].id ==id ){
              abhiKaUrl = finalUrl.imageUrl[i].url
            }
          }
          // console.log(abhiKaUrl);
          const updateData = {$pull:{imageUrl :{url:abhiKaUrl}}}
          const finalDataa = await removeUrl(data, updateData)
          // console.log(finalDataa);
          
          return res.send({status:true,data:finalDataa})
    
  } catch (error) {
    console.log("error from deleteImage :-",error.message);
      return  res.status(500).send({status:false,Error:error.message})
  }
  }


module.exports = {generateImage,getAllImage,deleteImage}







