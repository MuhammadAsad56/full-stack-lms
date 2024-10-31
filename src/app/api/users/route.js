import { connectDB } from "@/lib/dbConnect";
import { Users } from "@/lib/modals/user.modal";
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
    if (user) return Response.json(
        { error: true, msg: "User Already Exist" },
         { status: 403 }
        )
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(obj.password, saltRounds)
        obj.password = hashedPassword
        let newUser = new Users({...obj})
        newUser = await newUser.save()
        const token = jwt.sign({id: newUser._id, role: newUser.role},process.env.JWT_KEY)     
        return Response.json(
            {error: false, msg: "User Added Successfully", user: newUser, token},
            {status: 201}
        )
}

export async function PUT(request) { }

export async function DELETE(request) { }
