
const jwt=require("jsonwebtoken")
const User = require("../models/user.model")

const registerController=async (req,res) => {
    const data=req.body
    try {
       const user= await User.insertOne(data)
       res.status(201).json({message:`User is created with this id  : ${user._id}`})
    } catch (error) {
        res.status(500).json({message:"Internal server error"})
    }
}

const loginController=async (req,res) => {
    const {email,password}=req.body
    try {
        const user=await User.findOne({email})
        if(!user) return res.status(404).json({message:"user not found"})
        if(password!==user.password) return res.status(404).json({message:"Invalid password"})
        //! generate a token
        const token=await jwt.sign({userId:user._id,role:user.role},process.env.JWT_SCRECT,{expiresIn:"1hr"})

        res.cookie("jwt_token",token,{
            maxAge:24*60*60*1000,
            httpOnly:true,
            secure:false
        })

        res.status(200).json({message:"login done successfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal server error"})
    }
}


module.exports={registerController,loginController}