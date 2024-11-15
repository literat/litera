'use client';

import { Form } from '@local/components/Form';
import { createFitAction } from './actions';
import useForm from '@local/libs/useForm';
import { useRouter } from 'next/navigation';
import React, { useActionState } from 'react';

export function CreateFit() {
  const { inputs, handleChange } = useForm({
    name: 'Nice Shoes',
    description: 'soo nice',
    image: '',
    originalPrice: 500,
  });
  const router = useRouter();

  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useActionState(createFitAction, initialState);

  const uploadFile = async (event) => {
    const { files } = event.target;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'sickfits');

    const response = await fetch(
      'https://api.cloudinary.com/v1_1/literat/image/upload',
      { method: 'POST', body: data },
    );
    await response.json();
    // this.setState({
    // image: file.secure_url,
    // largeImage: file.eager[0].secure_url,
    // });
  };

  return (
    <Form action={dispatch} data-test="form">
      {/* <Error error={error} /> */}
      <fieldset /* disabled={loading} aria-busy={loading} */>
        <label htmlFor="file">
          Image
          <input
            type="file"
            id="file"
            name="file"
            placeholder="Upload an image"
            required
            onChange={uploadFile}
          />
          {inputs.image && (
            <img src={inputs.image} width="200" alt="Upload Preview" />
          )}
        </label>
        <label htmlFor="title">
          Title
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            required
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            type="text"
            id="price"
            name="price"
            placeholder="Price"
            required
            value={inputs.price}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            type="text"
            id="description"
            name="description"
            placeholder="Enter a Description"
            required
            value={inputs.description}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </fieldset>
    </Form>
  );
}
