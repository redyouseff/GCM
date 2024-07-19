const mongoose=require("mongoose");
const { type } = require("os");

const orderSchema=mongoose.Schema({
    name:{
        type:String
    },
    order:[{
        id:{
         
            type:String,
            require:[true,"produt id is reqired"]
        },
        quantity:{
            type:Number,
            // required:[true,"quantity is reqiered"]
        }
    }],
    price:Number
    

})



const orderModel=mongoose.model("order",orderSchema)

module.exports=orderModel;