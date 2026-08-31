'use client';

import { Form } from '@local/components/Form';
import { createFitAction } from '../actions/createFit';
import { useRouter } from 'next/navigation';
import React, { useActionState } from 'react';
import { Button, Flex, Text, TextArea, TextField } from '@radix-ui/themes';
import styles from './CreateFit.module.scss';

export function CreateFit() {
  const router = useRouter();

  const initialState: { message: string; errors: Record<string, any> } = {
    message: '',
    errors: {},
  };
  // @ts-expect-error -- No overload matches this call.
  const [state, dispatch] = useActionState(createFitAction, initialState);

  return (
    <Form action={dispatch} data-test="form">
      {/* <Error error={error} /> */}
      <Flex asChild direction="column" gap="3">
        <fieldset /* disabled={loading} aria-busy={loading} */>
          <label htmlFor="file">
            <Text as="div" size="2" weight="bold" mb="1">
              Image
            </Text>
            <input
              className={styles.fileInput}
              type="file"
              id="file"
              name="image"
              placeholder="Upload an image"
              required
            />
            {/* {inputs.image && (
              <img src={inputs.image} width="200" alt="Upload Preview" />
            )} */}
          </label>
          <label htmlFor="name">
            <Text as="div" size="2" weight="bold" mb="1">
              Name
            </Text>
            <TextField.Root
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
            />
          </label>
          <label htmlFor="original-price">
            <Text as="div" size="2" weight="bold" mb="1">
              Original Price
            </Text>
            <TextField.Root
              type="number"
              id="original-price"
              name="original-price"
              placeholder="Original Price"
              required
            />
          </label>
          <label htmlFor="description">
            <Text as="div" size="2" weight="bold" mb="1">
              Description
            </Text>
            <TextArea
              id="description"
              name="description"
              placeholder="Enter a Description"
              required
            />
          </label>
          <Button type="submit">Submit</Button>
        </fieldset>
      </Flex>
      {
        // @ts-expect-error -- message does not exist on state
        state.message && (
          <Text as="p" color="red" size="2" mt="3">
            {/* @ts-expect-error -- message does not exist on state */}
            {state.message}
          </Text>
        )
      }
    </Form>
  );
}
