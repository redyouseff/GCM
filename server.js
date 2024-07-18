const express=require("express");
const { execPath } = require("process");
const dotenv=require("dotenv");
const morgan =require("morgan")
const cors=require("cors");
const app=express();
const globelError=require("./middleware/globelError")
const dbConnection=require("./config/dbConnection")
const mainRoute=require("./routes/mainRoute")
const appError =require("./utilts/apiError")

app.use(express.json());
dotenv.config({path:"config.env"})
app.use(cors());
app.options("*",cors());


dbConnection();

const server= app.listen(process.env.PORT,()=>{
    console.log(`app listen on prot ${process.env.PORT}`)
  
})

if(process.env.MODE_ENV=="development "){
app.use(morgan("dev"))
console.log(`mode is ${process.env.MODE_ENV}`)
    
}


mainRoute(app);

app.use("*",(req,res,next)=>{
    next (new appError(`cant find this url ${req.originalUrl}`,400));

})




app.use(globelError);

//globel error handling  on server 
process.on("unhandledRejection",(err)=>{
    console.log(` unhandledRejection error :${err}`)
    server.close(()=>{
        console.error("shutin down the server ")
        process.exit(1);
    })
     
})
