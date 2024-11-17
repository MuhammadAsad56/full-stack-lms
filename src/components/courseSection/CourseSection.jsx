import CourseCard from "../courseCard/CourseCard";
import { Button } from "../ui/button";

export default function CourseSection(){
    return(
        <div className="container mb-10 px-5 mx-auto">
            <div className="flex justify-between items-center my-5">
                <h1 className="font-bold text-2xl">Apply to our latest course</h1>
                <Button >Show All Course</Button>
            </div>
            <CourseCard/>
        </div>
    )
}