const express=require("express")
const { registerController, loginController } = require("../controller/public.controller")

const publicRoute=express.Router()


publicRoute.post("/register",registerController)

publicRoute.post("/login",loginController)


module.exports=publicRoute