import { connectDB } from "@/lib/dbConnect";
import { BatchModal } from "@/lib/modals/batch.modal";
import { CourseModal } from "@/lib/modals/course.modal";

export async function GET(request) {
    await connectDB()
    const requestUrl = request.url
    const {searchParams} = new URL(requestUrl)
    const query = {}
    if(searchParams.get("course")){
     query.course = searchParams.get("course")
    }
    const batch = await BatchModal.find(query).populate("course", "title")  
    return Response.json(
        { batch, msg: "betch fetched successfully" }, { status: 200 })
}
export async function POST(request) {
    await connectDB()
    const obj = await request.json()
        let newBatch = new BatchModal({...obj})
        newBatch = await newBatch.save()
        return Response.json(
            {error: false, msg: "Batch Added Successfully", batch: newBatch},
            {status: 201}
        )
}
export async function PUT(request) { }

export async function DELETE(request) { }
