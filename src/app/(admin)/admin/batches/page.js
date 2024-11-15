import { AddBatchDrawer } from "@/components/addcourseDrawer/AddBatchDrawer";
import { BatchTable } from "@/components/dataTables/BatchTable";

export default function Batches() {
    return (
        <div className="min-h-screen container mx-auto">
            <div className="flex justify-between items-center ">
                <h1 className="text-center text-2xl my-10 font-bold">Batches</h1>
                <AddBatchDrawer />
            </div>
            <BatchTable/>
        </div>
    )
}