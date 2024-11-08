import mongoose from "mongoose";

const batchSchema = new mongoose.Schema({
    title: String,
    description: String,
    course : {type: mongoose.Schema.Types.ObjectId, ref: "Course"},
    status:{type: String, default : "pending", enum: ["pending", "admission-open","admission-closed", "ongoing", "completed"]}
})

export const BatchModal = mongoose.models.Batch || mongoose.model("Batch", batchSchema)