import mongoose from "mongoose"

const  { Schema }  = mongoose;

const User = new Schema({
  email : {type:String,required:true},
  password : {type:String,required:true},
  name_author : {type:String,required:true},
  img_author : {type:String,required:true},
  isAdmin: { type: Boolean,default: false},
});

module.exports=mongoose.model("user",User)