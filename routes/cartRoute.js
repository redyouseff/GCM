const express =require("express")
const router=express.Router();
const {addProductToCart,getLoggedUserCart,deleteSpecificItem,clearCart,updateCartItemQUantity}=require("../service/cartService")
 const {protect}=require("../service/authService");
const { route } = require("./userRoute");


 router.route("/").get(protect,getLoggedUserCart).post(protect,addProductToCart).delete(protect,clearCart)
 router.route("/:id").delete(protect,deleteSpecificItem).put(protect,updateCartItemQUantity)



 module.exports=router