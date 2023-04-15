const mongoose=require('mongoose');
require('dotenv').config();

const dbconnection = async ()=>{
    try {
     const URL=process.env.url;
     mongoose.set("strictQuery", true);
     await mongoose.connect(URL,{useNewUrlParser:true})
     console.log("Database connect");
    } catch (error) {
     console.log("error while db connection", error.message);
    }
 }

 module.exports = {dbconnection}

//  mongoose.set('strictQuery', true);
// mongoose.connect("mongodb+srv://Nishant:Kh8cI13BDxDiuUHh@cluster0.k0s0qbw.mongodb.net/demoProject", {
//     useNewUrlParser: true
// })
// .then( () => console.log("MongoDb is connected"))
// .catch ( err => console.log(err) )