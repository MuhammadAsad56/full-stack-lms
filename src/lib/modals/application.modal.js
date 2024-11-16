import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    course : {type: mongoose.Schema.Types.ObjectId, ref: "Course"},
    batch : {type: mongoose.Schema.Types.ObjectId, ref: "Batch"},
    admission : {type: mongoose.Schema.Types.ObjectId, ref: "Admission"},
    user : {type: mongoose.Schema.Types.ObjectId, ref: "Users"},
    info: {
       CNIC: String,
       DOB: String,
       address: String
    },
    status:{type: String, default : "pending", enum: ["pending", "enrolled","failed"]},
})

export const ApplicationModal = mongoose.models.Application || mongoose.model("Application", applicationSchema)