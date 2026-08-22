'use client';

import React from 'react';
import { Button } from '@radix-ui/themes';
import { ExitIcon } from '@radix-ui/react-icons';
import { logout } from '../actions/logout';

export default function Logout() {
  return (
    <Button type="button" variant="ghost" size="3" onClick={logout}>
      <ExitIcon /> Sign Out
    </Button>
  );
}
