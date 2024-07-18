const  express=require("express");
const router=express.Router();
const {createOrder,getAllOrder,deleteAllOrder}=require("../services/orders")


router.route("/").post(createOrder).get(getAllOrder).delete(deleteAllOrder)

module.exports=router;


