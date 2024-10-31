import { AddTrainerDrawer } from "@/components/addcourseDrawer/AddTrainerDrawer";
import { TrainerTable } from "@/components/dataTables/TrainerTable";

export default function Trainers() {
    return (
        <div className="min-h-screen container mx-auto">
            <div className="flex justify-between items-center ">
                <h1 className="text-center text-2xl my-10 font-bold">Trainers</h1>
                <AddTrainerDrawer/>
            </div>
            <TrainerTable />
        </div>
    )
}