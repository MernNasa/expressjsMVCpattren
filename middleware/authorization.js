const jwt=require("jsonwebtoken")

const authorization=(...roles) => {
    return (req,res,next)=>{
        try {
            const token=req.cookies.jwt_token
        jwt.verify(token,process.env.JWT_SCRECT,(err,decoded)=>{
                    if(err){
                        return res.status(401).json({message:"invalid token"})
                    }
                    if(!roles.includes(decoded.role)){
                       return res.status(401).json({message:"You are not allowed to access this api"})
                    }
                    next()
        })
        } catch (error) {
            res.status(500).json({message:"internal server error"})
        }
       
    }
}

module.exports=authorization