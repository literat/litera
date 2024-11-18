import bcrypt from 'bcrypt';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { fetchUserByMail } from '@local/features/auth/services/user';
import { authConfig } from './auth.config';

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await fetchUserByMail(email);

          if (!user) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(
            password,
            // @ts-expect-error -- 'user.password' is possibly 'null'.
            user.password.hash,
          );

          if (passwordsMatch) {
            return user;
          }
        }

        console.log('Invalid credentials');

        return null;
      },
    }),
  ],
});
