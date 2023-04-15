const express = require("express");
const cors =require("cors")
const fileUpload = require("express-fileupload")
const {dbconnection} = require("./src/db/dbconnect")
const route = require("./src/routes/routes");
const app = express();
require('dotenv').config();
const PORT=process.env.PORT ||8080;


app.use(express.json())
app.use(cors())

app.use(fileUpload({
  useTempFiles:true
}))

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
  });




app.use('/',route)

dbconnection()

app.listen(PORT ,function(){
    console.log(`Express app running on port ${PORT}`)
})
