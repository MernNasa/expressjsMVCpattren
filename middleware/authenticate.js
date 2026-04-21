
const jwt=require("jsonwebtoken")
const authenticate=async (req,res,next) => {
    const token=req.cookies.jwt_token
    if(!token) return res.status(404).json({message:"please provide the token"})
    try {
        jwt.verify(token,process.env.JWT_SCRECT,(err,decoded)=>{
            if(err){
                return res.status(401).json({message:"invalid token"})
            }
            req.user=decoded
            next()
        })
    } catch (error) {
        res.status(500).json({message:"Internal server error"})
    }
}
module.exports=authenticate