const mongoose=require("mongoose")

const connectDB=async (attempt=5,delay=5000) => {
    try {
        await mongoose.connect(process.env.MONGODB_URL,)
        console.log("DB connected successfully")
    } catch (error) {
        console.log("failed to connectDB")
       if(attempt<=0){
        console.log("we can't connect DB so We are closing")
        process.exit(1)
       }
       setTimeout(()=>{
        connectDB(attempt-1,delay+5000)
       },delay)
    }
}

module.exports=connectDB