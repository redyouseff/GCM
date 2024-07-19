const  express=require("express");
const router=express.Router();
const {createOrder,getAllOrder,deleteAllOrder,getSpecificOrder}=require("../services/orders")


router.route("/").post(createOrder).get(getAllOrder).delete(deleteAllOrder)
router.route("/:id").get(getSpecificOrder)
module.exports=router;


