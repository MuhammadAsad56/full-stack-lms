
import { connectDB } from "@/lib/dbConnect";
import { CourseModal } from "@/lib/modals/course.modal";

export async function GET(request) {
    await connectDB()
    const courses = await CourseModal.find()
    return Response.json(
        { courses, msg: "courses fetched successfully" }, { status: 200 })
}

export async function POST(request) {
    await connectDB()
    const obj = await request.json()
        let newCourse = new CourseModal({...obj})
        newCourse = await newCourse.save()
        return Response.json(
            {error: false, msg: "NewCourse Added Successfully", Course: newCourse},
            {status: 201}
        )
}
export async function PUT(request) { }

export async function DELETE(request) { }