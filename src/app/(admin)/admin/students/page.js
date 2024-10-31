import { AddStudentDrawer } from "@/components/addcourseDrawer/AddStudentDrawer";
import { StudentTable } from "@/components/dataTables/StudentTable";

export default function Students() {
    return (
        <div className="min-h-screen container mx-auto">
            <div className="flex justify-between items-center ">
                <h1 className="text-center text-2xl my-10 font-bold">Students</h1>
                <AddStudentDrawer />
            </div>    
            <StudentTable />
        </div>
    )
}