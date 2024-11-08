import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    title: {type: String, unique: true},
    description : String,
    eligibility: [String],
    duration: String,
    thumbnail: String
}, {timestamps: true})

export const CourseModal = mongoose.models.Course || mongoose.model("Course", courseSchema)