const express=require("express")
const app=express()
require('dotenv').config()
const tesroute=require("./routes/TestRoutes.js")
const categoryroute=require("./routes/CategoryRoute.js")
require(`./database/connection.js`)
const port = process.env.PORT
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
console.log(process.env.PORT)
app.use(tesroute)
app.use("/category", categoryroute)

app.get("/",(req,res)=>{
    res.send("Helloo World")
})
app.get("/home",(req,res)=>{
    res.send("My name is Aashika")
})




