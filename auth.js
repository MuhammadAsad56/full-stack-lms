import { connectDB } from "@/lib/dbConnect"
import { Users } from "@/lib/modals/user.modal"
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"

const handleLoginUser = async (profile) => {
  await connectDB()
  const user = await Users.findOne({email: profile.email})
  if(user){
    return user
  }else{
    const obj = {
      fullname: profile.name,
      email: profile.email,
      profileImg: profile.picture,
    }
    let newUser = await new Users(obj)
    newUser = await newUser.save()
    return newUser
  }
}
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google,
     Credentials({
    credentials: {
      email: {},
      password: {},
    },
    authorize: async (credentials) => {
      let user = credentials
      console.log("user>", user);
      let res = await fetch('http://localhost:3000/api/users/login',{
        method: "POST",
        body: JSON.stringify({
        email: user.email,
        password: user.password,
        provider: "crediential"
        })
      })
      res = await res.json()
      return {email: user.email}
    },
  }),
],
  callbacks: {
    async signIn({ account, profile }) {
      if(account.provider == "google"){     
        const user = await handleLoginUser(profile)
        await Users.updateOne({email: user.email},{ provider: 'google'})
        return {...profile, role: user.role}
      }
      return true
    },
    async jwt({ token }) {
      const user = await handleLoginUser({email: token.email})
      token._id = user._id
      token.role = user.role
      return token
    },
    session({ session, token }) {
      session.user._id = token._id
      session.user.role = token.role
      return session
    },
  },
})