import type { NextAuthOptions } from 'next-auth';
import { NextResponse } from 'next/server';

export const authConfig: NextAuthOptions = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, user, token }) {
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },
  providers: [], // Add your providers here
};
