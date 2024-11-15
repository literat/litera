'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { createFit } from '@local/libs/data';

export type State = {
  errors?: {
    name?: string[];
    description?: string[];
    originalPrice?: string[];
  };
  message?: string | null;
};

const FormSchema = z.object({
  id: z.string(),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Please select an invoice status.',
  }),
  name: z.string(),
  description: z.string(),
  originalPrice: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than $0.' }),
});

const CreateFit = FormSchema.omit({ id: true });

export async function createFitAction(prevState: State, formData: FormData) {
  const validatedFields = CreateFit.safeParse({
    name: formData.get('name'),
    description: formData.get('description'),
    originalPrice: formData.get('originalPrice'),
    file: formData.get('file'),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Fit.',
    };
  }

  // Prepare data for insertion into the database
  const { name, description, originalPrice } = validatedFields.data;

  // Insert data into the database
  try {
    const fit = await createFit({ name, description, originalPrice });
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Fit.',
    };
  }

  revalidatePath('/home/fits');
  redirect('/home/fits');
}
