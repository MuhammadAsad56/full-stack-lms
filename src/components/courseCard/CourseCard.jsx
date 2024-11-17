import { getAdmissions } from "@/actions/admissions";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button";

export default async function CourseCard(){
    const {admissions} =  await getAdmissions("open")
    console.log("admissions in card Section>", admissions);
    
    return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
       {admissions?.map(admission => {
           return(
               <Card key={admission._id}>
                   <CardHeader>
                       <CardTitle>{admission?.course?.title}</CardTitle>
                       <CardDescription>{admission?.batch?.title}</CardDescription>
                   </CardHeader>
                   <CardContent>
                       <p>{admission.course.description}</p>
                   </CardContent>
                   <CardFooter>
                       <Button>Apply for Course</Button>
                   </CardFooter>
               </Card>
           )
        }  
            )
        }
        </div> 
    )
}