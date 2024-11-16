import { connectDB } from "@/lib/dbConnect";
import { AdmissionModal } from "@/lib/modals/admission.modal";
import { ApplicationModal } from "@/lib/modals/application.modal";
import { BatchModal } from "@/lib/modals/batch.modal";
import { CourseModal } from "@/lib/modals/course.modal";
import { Users } from "@/lib/modals/user.modal";

export async function GET(request) {
    await connectDB()
    try {
        const requestUrl = request.url
        const {searchParams} = new URL(requestUrl)
        const query = {}
        if(searchParams.get("course")){
         query.course = searchParams.get("course")
        }
        if(searchParams.get("batch")){
         query.batch = searchParams.get("batch")
        }
        if(searchParams.get("admission")){
         query.admission = searchParams.get("admission")
        }
        if(searchParams.get("user")){
         query.user = searchParams.get("user")
        }
        const applications = await ApplicationModal.find(query)
        .populate("course", "title") 
        .populate("batch", "title") 
        .populate("admission", "stratDate endDate status") 
        .populate("user", "fullname email") 
        return Response.json(
            { applications, msg: "Applications fetched successfully" }, { status: 200 }) 

    } catch (error) {
        return Response.json(
            {msg: "something went wrong" }, { status: 400 })
    }
}

export async function POST(request) {
    await connectDB()
    const obj = await request.json()
        let newApplication = new ApplicationModal({...obj})
        newApplication = await newApplication.save()
        return Response.json(
            {error: false, msg: "Application Added Successfully", application: newApplication},
            {status: 201}
        )
}
export async function PUT(request) { }

export async function DELETE(request) { }
