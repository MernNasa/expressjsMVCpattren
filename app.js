
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

app.use("/api/v1",publicRoute)
app.use("/api/v1",userRouter)

app.get("/api/v1/health",(req,res)=>{
    res.status(200).json({message:"server is healthy"})
})


app.listen(8080,()=>{
    console.log("server is running")
})