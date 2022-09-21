import  express  from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
const app=express()
const loginrouter=require('./routes/login');

dotenv.config();

const connect = async () =>{
    try{
        await mongoose.connect(process.env.MONGO);
    }catch(err){
        throw err
    }
} 
app.use(express.json())
app.use(express.urlencoded({ 
    extended:true
}));

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });

app.use("/login",loginrouter);

app.listen(5000,()=>{
    connect();
    console.log("completed")
})