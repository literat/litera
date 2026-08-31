'use server';

import { signOut } from '@local/features/auth/services/authService';

export const logout = async () => {
  await signOut();
};
