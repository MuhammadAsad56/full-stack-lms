import { redirect } from "next/navigation";
import { signIn , auth} from "../../../auth";
 
export default async function SignIn() {
    const session = await auth()
    if(session) redirect('/')
  return (
    <div className="container mx-auto flex items-center justify-center h-screen">
    {/* <form
    className="flex flex-col gap-3 border px-4 py-2"
    action={async (formData) => {
      "use server"
      await signIn("credentials", formData, {redirect: false})
    }}
    >
     <input type="email" required className="border px-3 py-1" name="email" placeholder="enter email"/>
     <input required className="border px-3 py-1" name="password" placeholder="enter password"/>
     <div className="flex justify-center">
     <button className="border px-3 py-1" type="submit">Login</button>
     </div>
    </form> */}
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