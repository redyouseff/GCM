
const mongoose =require("mongoose");
const productSchema=mongoose.Schema({
    title:{
        type:String,
        required:[true,"title is required"],
        trim:true,
        unique:[true,"product is exsist"]

    },
    
    quantity:{
        type:Number,
        required:[true,"the quantity is required"]
    },
    sold:{
        type:Number,
        default:0
    },
    price:{
        type:Number,
        required:[true,"price is required"]
    },
    id:{
        type:Number,
        required:[true,"id is required"],
        unique:[true,"the id must be unique"]
    }

},{timestamps:true})

const productModel=new mongoose.model("product",productSchema);
module.exports=productModel;
