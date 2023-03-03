import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 60 * 24 * 7
  },
  debug: process.env.NODE_ENV === "development",
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text"
        },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const isCorrectLogin =
          credentials!.username === "repro" &&
          credentials!.password === "repro";

        if (isCorrectLogin) {
          return {
            username: credentials!.username,
            credentials: {
              username: credentials!.username,
              password: credentials!.password
            }
          } as any;
        } else {
          throw new Error("Неверный логин или пароль");
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        token.user = {
          username: user!.username
        };
        token.credentials = user!.credentials;

        return token as any;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      return session;
    }
  },
  pages: {
    signIn: "/login"
  }
};
export default NextAuth(authOptions);
