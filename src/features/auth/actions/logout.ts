import { signOut } from '@local/features/auth/services/authService';

export const logout = async () => {
  'use server';

  await signOut();
};
