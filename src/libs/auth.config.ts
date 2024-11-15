export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    // @ts-expect-error -- Binding element 'auth' implicitly has an 'any' type.
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnHome = nextUrl.pathname.startsWith('/home');
      if (isOnHome) {
        if (isLoggedIn) {
          return true;
        }

        // Redirect unauthenticated users to login page
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/home', nextUrl));
      }

      return true;
    },
  },
  // Add providers with an empty array for now
  providers: [],
};
