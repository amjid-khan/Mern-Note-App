import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Content = mongoose.model("Note", contentSchema)

export default Content