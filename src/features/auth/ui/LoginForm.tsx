'use client';

import { Form } from '@local/ui/Form';
import { Error } from '@local/ui/Error';
import React, { useActionState } from 'react';
import { authenticate } from '@local/features/auth/actions/authenticate';
import { useFormStatus } from 'react-dom';

export default function LoginForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <Form action={formAction}>
      <fieldset disabled={isPending} aria-busy={isPending}>
        <h2>Sign into your account</h2>
        {errorMessage && <Error error={errorMessage} />}
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="email"
            autoComplete="email"
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            placeholder="password"
            autoComplete="new-password"
          />
        </label>

        <LoginButton />
      </fieldset>
    </Form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending}>
      Sign In!
    </button>
  );
}
