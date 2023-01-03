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
      // Persist the OAuth access_token to the token right after signin
      if (user) {
        token.isAdmin = user.data.isAdmin;
      }
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.isAdmin = token.isAdmin;
      return session;
    },
  },
};
export default NextAuth(authOptions);
