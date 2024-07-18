const productModel=require("../models/productModel")
const asyncHandler=require("express-async-handler")
const appError = require("../utilts/apiError")
const { title } = require("process")


const createPrduct=asyncHandler(async(req,res,next)=>{
  const product = await productModel.create(req.body)

  res.status(200).json({status:"success", statusCode:200, data:product})
})

const getAllProduct=asyncHandler(async(req,res)=>{
    const product =await productModel.find({});
   
    
   
    res.status(200).json({status:200,data:product})
})


const getSpecificProduct=asyncHandler(async(req,res,next)=>{
    const product= await productModel.findById(req.params.id)
  
   
    if(!product){
        return next (new appError(`there is no product for this id ${req.params.id}`,400))
    }else{
        res.status(200).json({status:"success",data:product})
    }
   
})

const deleteProduct=asyncHandler(async(req,res,next)=>{
    const product=await productModel.findByIdAndDelete(req.params.id)
  

        if(!product){
            return next (new appError(`there is no product for this id ${req.params.id}`,400))
        }else{
           
          
            res.status(200).json({status:"success",data:product})
        }
       

    

})

const updateQuantity=asyncHandler(async(req,res,next)=>{
    const product =await productModel.findByIdAndUpdate(req.params.id,
        {quantity:req.body.quantity},
        {new:true}
    )
    if(!product){
        return next (new appError(`there is no product for this id ${req.params.id}`,400))
    }else{
       
        res.status(200).json({status:"success",data:product})
    }
})





module.exports={createPrduct,getAllProduct,getSpecificProduct,deleteProduct,updateQuantity}