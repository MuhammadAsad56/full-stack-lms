import { AddCourseDrawer } from "@/components/addcourseDrawer/AddCourseDrawer";
import { CourseTable } from "@/components/dataTables/CourseTable";
import { Button } from "@/components/ui/button";

export default function Courses (){
    return(
        <div className="min-h-screen container mx-auto">
            <div className="flex justify-between items-center ">
            <h1 className="text-center text-2xl my-10 font-bold">Courses</h1>
             <AddCourseDrawer/>
            </div>
            <CourseTable/>
        </div>
    )
}