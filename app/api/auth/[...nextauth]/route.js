import { authOptions } from "@/app/lib/NextAuth"
import NextAuth from "next-auth"

export const { handlers, signIn, signOut, auth  } = NextAuth(authOptions)

export const { GET, POST } = handlers