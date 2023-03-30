import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials) {
        const user = await axios.post(
          "https://ecommerce-mern-api.vercel.app/api/auth/login",
          {
            username: credentials.username,
            password: credentials.password,
          }
        );

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user.data;
        token.isAdmin = user.data.isAdmin;
        token.accessToken = user.data.accessToken;
      }
      return token;
    },
    async session({ session, token, user }) {
      session.isAdmin = token.isAdmin;
      session.accessToken = token.accessToken;
      session.user = token.user;
      return session;
    },
  },
};
export default NextAuth(authOptions);
