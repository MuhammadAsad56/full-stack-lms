import mongoose from "mongoose";

const admissionSchema = new mongoose.Schema({
    course : {type: mongoose.Schema.Types.ObjectId, ref: "Course"},
    batch : {type: mongoose.Schema.Types.ObjectId, ref: "Batch"},
    status :{type: String, default : "pending", enum: ["pending", "open","close"]},
    stratDate: String,
    endDate : String

})

export const AdmissionModal = mongoose.models.Admission || mongoose.model("Admission", admissionSchema)