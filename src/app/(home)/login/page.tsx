import { Columns } from '@local/ui/Columns';
import LoginForm from '@local/features/auth/ui/LoginForm';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Login',
};

export default function Login() {
  return (
    <main>
      <Columns>
        {/* <Signup /> */}
        <LoginForm />
        {/* <RequestReset /> */}
      </Columns>
    </main>
  );
}
