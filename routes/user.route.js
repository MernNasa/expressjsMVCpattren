const express=require("express")
const { profileController } = require("../controller/user.controller")
const authenticate = require("../middleware/authenticate")
const authorization = require("../middleware/authorization")


const userRouter=express.Router()


userRouter.get("/profile",authenticate,authorization('admin'),profileController)

module.exports=userRouter