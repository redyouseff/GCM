const  express=require("express");
const router=express.Router();
const {createPrduct,getAllProduct,getSpecificProduct,deleteProduct,updateQuantity}=require("../services/productService")


router.route("/").post(createPrduct) .get(getAllProduct)
router.route("/:id").get(getSpecificProduct).delete(deleteProduct).patch(updateQuantity)



module.exports=router
