
require("dotenv").config()
const express=require("express")
const cookies=require("cookie-parser")
const connectDB = require("./config/db/db")
const User = require("./models/user.model")
const publicRoute = require("./routes/public.route")
const userRouter = require("./routes/user.route")

const app=express()
app.use(express.json())
app.use(cookies())
connectDB()

app.set("view engine","ejs")
app.use("/api/v1",publicRoute)
app.use("/api/v1",userRouter)

app.get("/api/v1/health",(req,res)=>{
    res.status(200).json({message:"server is healthy"})
})

app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/features",(req,res)=>{
    res.render("features")
})

app.get("/pricing",(req,res)=>{
    res.render("pricing")
})

app.get("/contact",(req,res)=>{
    res.render("contact")
})


app.listen(8080,()=>{
    console.log("server is running")
})