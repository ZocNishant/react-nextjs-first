import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: "GOOGLE_ID",
      clientSecret: "GOOGLE_CLIENT_SECRET",
    }),
  ],
  async session({ session }) {},
  async signIn({ profile }) {
    try {
    } catch (error) {}
  },
});

export { handler as GET, handler as POST };
