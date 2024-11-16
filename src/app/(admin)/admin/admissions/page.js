import { getAdmissions } from "@/actions/admissions"
import { getBatches } from "@/actions/batches"
import { getCourses } from "@/actions/courses"
import { AddAdmissionDrawer } from "@/components/addcourseDrawer/AddAdmissionDrawer"
import { AdmissionTable } from "@/components/dataTables/AdmissionTable"

export default async function Batches() { 
    const {admissions} = await getAdmissions()
    const {courses} = await getCourses()
    const {batches} = await getBatches()
    return (
        <div className="min-h-screen container mx-auto">
            <div className="flex justify-between items-center ">
                <h1 className="text-center text-2xl my-10 font-bold">Admissions</h1>
                <AddAdmissionDrawer courses={courses} batches={batches}/>
            </div>
            <AdmissionTable data={admissions}/>
        </div>
    )
}