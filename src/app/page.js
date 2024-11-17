import HeroSection from "@/components/heroSection/HeroSection";
import { auth } from "../../auth";
import Header from "@/components/header/Header";
import CourseSection from "@/components/courseSection/CourseSection"; 
import { getAdmissions } from "@/actions/admissions";

export default async function Home() {
  const session = await auth()
  // console.log("session in main page=>", session);
  
  return (
    <div className="min-h-screen container mx-auto px-5">
      <Header/>
      <h1 className="text-center text-3xl font-bold">Main Page</h1>
      <HeroSection/>
      <CourseSection/>
    </div>
  );
}
