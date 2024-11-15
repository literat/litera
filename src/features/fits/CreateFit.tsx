'use client';

import { Form } from '@local/components/Form';
import { createFitAction } from './actions';
import { useRouter } from 'next/navigation';
import React, { useActionState } from 'react';

export function CreateFit() {
  const router = useRouter();

  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useActionState(createFitAction, initialState);

  return (
    <Form action={dispatch} data-test="form">
      {/* <Error error={error} /> */}
      <fieldset /* disabled={loading} aria-busy={loading} */>
        <label htmlFor="file">
          Image
          <input
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
          Name
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
        </label>
        <label htmlFor="original-price">
          Original Price
          <input
            type="number"
            id="original-price"
            name="original-price"
            placeholder="Original Price"
            required
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            id="description"
            name="description"
            placeholder="Enter a Description"
            required
          />
        </label>
        <button type="submit">Submit</button>
      </fieldset>
      {state.message && <p>{state.message}</p>}
    </Form>
  );
}
