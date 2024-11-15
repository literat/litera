import { signOut } from '@local/features/auth/services/auth';

export const logout = async () => {
  'use server';

  await signOut();
};
