import { connectDB } from "@/lib/dbConnect"
import { Users } from "@/lib/modals/user.modal"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export async function GET(request) {
    await connectDB()
    const users = await Users.find()
    return Response.json(
        { users: users, msg: "users fetched successfully" }, { status: 200 })
}

export async function POST(request) {
    await connectDB()
    const obj = await request.json()
    const user = await Users.findOne({ email: obj.email })
    if(!user) return Response.json(
    {error: true, msg : "User Not Found"},{status:404}
    )
   const isPasswordMatch = await bcrypt.compare(obj.password, user.password)
   if(!isPasswordMatch) return Response.json(
    {error: true, msg : "Password Not Found"},{status:404}
   )
   const token = jwt.sign({id: user._id, role: user.role}, process.env.JWT_KEY)

    return Response.json(
        {error: false, msg: "User Login", user: user, token },{status:200}
    )
}