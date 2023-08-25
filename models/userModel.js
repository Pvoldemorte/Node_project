import mongoose from "mongoose";

const userSchema = mongoose.Schema({
   
    name: {
        type:String,
        require:true
    },
    // userName: {
    //     type:String,
    //     require:true
    // },
    email: {
        type:String,
        require:true
    },
    password: {
        type:String,
        require:true
    },
    // profileImg: {
    //     type:String,
    //     require:true
    // },
    // address: {
    //     type:String,
    //     require:true
    // },
    mobileNumber: {
        type:String,    
        require:true
    }
},{timestamps:true})

export const UserDb = new mongoose.model("UserDb", userSchema);