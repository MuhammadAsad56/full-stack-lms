import { connectDB } from "@/lib/dbConnect";
import { AdmissionModal } from "@/lib/modals/admission.modal";
import { BatchModal } from "@/lib/modals/batch.modal";
import { CourseModal } from "@/lib/modals/course.modal";

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
        const admissions = await AdmissionModal.find(query)
        .populate("course", "title") 
        .populate("batch", "title") 
        return Response.json(
            { admissions, msg: "Admissions fetched successfully" }, { status: 200 }) 
    } catch (error) {
        return Response.json(
            {msg: "something went wrong" }, { status: 400 })
    }
}

export async function POST(request) {
    await connectDB()
    const obj = await request.json()
        let newAdmission = new AdmissionModal({...obj})
        newAdmission = await newAdmission.save()
        return Response.json(
            {error: false, msg: "Admission Added Successfully",admission: newAdmission},
            {status: 201}
        )
}
export async function PUT(request) { 
    await connectDB()
    const obj = await request.json()
    const {id , status} = obj
    const updated = await AdmissionModal.findOneAndUpdate({_id: id}, {status: status}).lean()
        return Response.json(
            {error: false, msg: "Admission Updated Successfully" ,admission: updated},
            {status: 202}
        )
}

export async function DELETE(request) { }
