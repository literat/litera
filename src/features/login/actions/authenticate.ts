'use server';

import { z } from 'zod';
import { redirect } from 'next/navigation';
import { signIn } from '@local/libs/auth';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    // @ts-expect-error -- 'error' is of type 'unknown'.
    if (error.type) {
      // @ts-expect-error -- 'error' is of type 'unknown'.
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }

    throw error;
  }
}
