import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    },
    discount:{
        type:String,
        require:true
    },
    quantity:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    produImg:{
        type:String,
        require:true
    }
})


export const productDb = new mongoose.model("productDb", productSchema);