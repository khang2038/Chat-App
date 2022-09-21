import user from '../model/user.js';

export const getAllUser=async (req,res)=>{
    try{
        const User= await user.find();
        res.status(200).json(User);
    }catch(err){
        throw err
    }
} 

