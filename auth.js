import { connectDB } from "@/lib/dbConnect"
import { Users } from "@/lib/modals/user.modal"
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

const handleLoginUser = async (profile) => {
  await connectDB()
  const user = await Users.findOne({email: profile.email})
  if(user){
    return user
  }else{
    const obj = {
      fullname: profile.name,
      email: profile.email,
      provider: "google",
      profileImg: profile.picture,
    }
    let newUser = await new Users(obj)
    newUser = await newUser.save()
    return newUser
  }
}
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ account, profile }) {
      const user = await handleLoginUser(profile)
      return {...profile, role: user.role} // Do different verification for other providers that don't have `email_verified`
    },
    async jwt({ token }) {
      const user = await handleLoginUser(token)
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