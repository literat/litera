import LoginForm from '@local/features/auth/ui/LoginForm';
import { Grid } from '@radix-ui/themes';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Login',
};

export default function Login() {
  return (
    <main>
      <Grid columns={{ initial: '1', sm: '2' }} gap="5">
        {/* <Signup /> */}
        <LoginForm />
        {/* <RequestReset /> */}
      </Grid>
    </main>
  );
}
