import React from 'react';
import { signOut } from '@local/features/auth/services/authService';
import { logout } from '../actions/logout';

export default function Logout() {
  return <button onClick={logout}>Sign Out</button>;
}
