import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    fullname: String,
    email: {type: String, required: true},
    provider: {type: String},
    profileImg: String,
    password: String,
    role: {type: String, default: "user"},
    gender: String
}, {timestamps: true})
export const Users = mongoose.models.Users || mongoose.model("Users", userSchema)