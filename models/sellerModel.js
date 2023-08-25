import mongoose from "mongoose";

const userSchema = mongoose.Schema({
   
    name: {
        type:String,
        require:true
    },
   
    email: {
        type:String,
        require:true
    },
    password: {
        type:String,
        require:true
    },
    role: {
        type:String,
        require:true
    },
    profileImg: {
        type:String,
        require:true
    }
   
},{timestamps:true})

export const SellerDb = new mongoose.model("SellerDb", userSchema);