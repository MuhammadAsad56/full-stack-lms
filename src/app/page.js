import { auth } from "../../auth";
import Header from "@/components/header/Header";

export default async function Home() {
  const session = await auth()
  console.log("session in main page=>", session);
  return (
    <div className="min-h-screen container mx-auto">
      <Header/>
    <h1 className="text-center text-3xl my-10 font-bold">Main Page</h1>
    </div>
  );
}
