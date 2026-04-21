

const profileController=async (req,res) => {
    console.log(req.user)
    res.status(200).json({message:"user profile",role:req.user.role})
}

module.exports={profileController}