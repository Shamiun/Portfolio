import mongoose from "mongoose"

const connectDB = async () => {

    try{
        if(mongoose.connection.readyState === 0){
            await mongoose.connect(process.env.MONGODB_URI)
            // console.log("bd connected")
        }
    } catch(error){
        console.log(error)
    }
    
}
// 30:12

export default connectDB