const express=require("express")
const { sample } = require("../controller/TestController")
const router=express()
router.get("/",sample)
router.get("/home",(req,res)=>{
    res.send("My name is Aashika aa")
})
module.exports=router