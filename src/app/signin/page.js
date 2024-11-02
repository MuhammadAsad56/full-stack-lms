import { redirect } from "next/navigation";
import { signIn , auth} from "../../../auth";
 
export default async function SignIn() {
    const session = await auth()
    if(session) redirect('/')
  return (
    <div className="container mx-auto flex items-center justify-center h-screen">
    <form
      action={async () => {
          "use server"
          await signIn("google")
        }}
        >
      <button className="border px-5 py-2" type="submit">Continue with Google</button>
    </form>
        </div>
  )
} 