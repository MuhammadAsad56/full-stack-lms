import mongoose from "mongoose";
export async function connectDB() {
    try {
        let dbConnect;
        console.log("db Already connected");
        if (dbConnect?.connection?.readyState != 1){
            dbConnect = await mongoose.connect(process.env.MONGODB_URI)
            console.log("db Connected");
        }
    } catch (error) {
     console.log("error in db Connection" , error.message);
    } 
}