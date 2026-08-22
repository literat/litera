import React from 'react';
import { Callout } from '@radix-ui/themes';

export default function Error({ error }: { error: string }) {
  if (!error) {
    return null;
  }

  return (
    <Callout.Root color="red" variant="soft">
      <Callout.Text>
        <strong>Shoot!</strong> {error}
      </Callout.Text>
    </Callout.Root>
  );
}
