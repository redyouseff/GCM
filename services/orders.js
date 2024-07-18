const orderModel= require("../models/orderModel")
const asyncHandler=require("express-async-handler")
const appError = require("../utilts/apiError");
const productModel = require("../models/productModel");


const createOrder=asyncHandler(async(req,res,next)=>{
    
    let sum=0;
    await Promise.all(req.body.order.map(async (item) => {
        
        const product = await productModel.findOne({id:item.id});
       
            quantity=product.quantity-item.quantity;
            const updatedProduct=await productModel.findByIdAndUpdate(product._id,{
                quantity:quantity
            },{new:true})
           
        sum += product.price*item.quantity; 
      }));
    
    
    const order=await orderModel.create({
        order:req.body.order,
        price:sum
    })
   
    res.status(200).json(order)
  
})


const getAllOrder=asyncHandler(async(req,res,next)=>{
    const order=await orderModel.find({});
    if(!order){
        res.status(400).json({message:"there is no order yet"})
    }
    let sum=0;
    await Promise.all(order.map((item)=>{
        sum+=item.price;
    }))

    console.log(sum);
    res.status(200).json({status:"success",totail:sum,data:order})

})



const deleteAllOrder=asyncHandler(async(req,res,next)=>{
    const order= await orderModel.deleteMany();
    res.status(200).json({status:"success",data:order})

})






module.exports={createOrder,getAllOrder,deleteAllOrder}