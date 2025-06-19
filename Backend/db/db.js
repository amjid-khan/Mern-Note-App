import mongoose from "mongoose";

const connectionDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("MongoDB connected successfully")
    } catch (error) {
        console.log("Error While connecting db", error)
    }
}

export default connectionDB