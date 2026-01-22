import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          required: true,
        },
        password: {
          label: "Password",
          type: "password",
          required: true,
        },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Email and password required");
          }
          
          // api to sign in write here instead of rest of code

          const users = [
            {
              id: "1",
              email: "perihan.medhat@orevan.org",
              password: "12345678",
              name: "Perihan Medhat",
            },
            {
              id: "2",
              email: "user2@example.com",
              password: "password2",
              name: "User Two",
            },
            {
              id: "3",
              email: "user3@example.com",
              password: "password3",
              name: "User Three",
            },
          ];

          const user = users.find(
            (u) =>
              u.email === credentials.email &&
              u.password === credentials.password
          );

          // Destructure the user object to extract the password field and collect the remaining properties into a
          // new object named userWithoutPassword. Then return userWithoutPassword, which contains all user data 
          // except the password key
          const { password, ...userWithoutPassword } = user;
          return userWithoutPassword;
        } catch (error) {
          throw new Error(error.message);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 1 * 24 * 60 * 60,
  },
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};


