 const productRoute=require("./productRoute")
 const orderRoute=require("./orderRoute")
 const mainRoute=(app)=>{

app.use("/product",productRoute)

app.use("/order",orderRoute);


}
module.exports=mainRoute;