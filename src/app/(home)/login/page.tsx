import { Columns } from '@local/components/Columns';
import LoginForm from '@local/features/auth/LoginForm';
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
