'use client';

import { Form } from '@local/ui/Form';
import { Error } from '@local/ui/Error';
import React, { useActionState } from 'react';
import { authenticate } from '@local/features/auth/actions/authenticate';
import { useFormStatus } from 'react-dom';
import { Button, Flex, Heading, Text, TextField } from '@radix-ui/themes';

export default function LoginForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <Form action={formAction}>
      <Flex asChild direction="column" gap="3">
        <fieldset disabled={isPending} aria-busy={isPending}>
          <Heading as="h2" size="5">
            Sign into your account
          </Heading>
          {errorMessage && <Error error={errorMessage} />}
          <label htmlFor="email">
            <Text as="div" size="2" weight="bold" mb="1">
              Email
            </Text>
            <TextField.Root
              type="email"
              id="email"
              name="email"
              placeholder="email"
              autoComplete="email"
            />
          </label>
          <label htmlFor="password">
            <Text as="div" size="2" weight="bold" mb="1">
              Password
            </Text>
            <TextField.Root
              type="password"
              id="password"
              name="password"
              placeholder="password"
              autoComplete="new-password"
            />
          </label>

          <LoginButton />
        </fieldset>
      </Flex>
    </Form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" aria-disabled={pending} loading={pending}>
      Sign In!
    </Button>
  );
}
