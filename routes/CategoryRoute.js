const express=require("express")
const { read, create, update, categorydelete } = require("../controller/CategoryController")
const router=express()

router.get("/",read)
router.get("/create",create)
router.get("/update",update)
router.get("/delete",categorydelete)
module.exports=router
