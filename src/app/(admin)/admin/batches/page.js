import { getBatches } from "@/actions/batches";
import { getCourses } from "@/actions/courses";
import { AddBatchDrawer } from "@/components/addcourseDrawer/AddBatchDrawer";
import { BatchTable } from "@/components/dataTables/BatchTable";

export default async function Batches() {
    const  {batches}  = await getBatches()
    const  response  = await getCourses()    
    return (
        <div className="min-h-screen container mx-auto">
            <div className="flex justify-between items-center ">
                <h1 className="text-center text-2xl my-10 font-bold">Batches</h1>
                <AddBatchDrawer courses={response.courses}/>
            </div>
            <BatchTable data={batches}/>
        </div>
    )
}