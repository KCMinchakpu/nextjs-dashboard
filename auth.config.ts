import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',  // Set the login page
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');

      if (isOnDashboard && !isLoggedIn) {
        // For unauthorized users trying to access dashboard
        return false; // They will be redirected to the login page
      } else if (isLoggedIn && nextUrl.pathname === '/login') {
        // For logged-in users trying to access the login page
        return Response.redirect(new URL('/dashboard', nextUrl.origin));
      }

      return true;  // Allow the user to proceed in other cases
    },
  },
  providers: [], // Add providers here
} satisfies NextAuthConfig;
