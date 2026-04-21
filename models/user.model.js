const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    username:String,
    age:Number,
    email:String,
    password:String,
    gender:String,
    education:String,
    role:String
})

const User=mongoose.model("user",userSchema)

module.exports=User