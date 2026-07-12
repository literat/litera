'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { createFit } from '@local/features/fits/repositories/fitsRepository';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export type State = {
  errors?: {
    name?: string[];
    description?: string[];
    originalPrice?: string[];
  };
  message?: string | null;
};

type CloudinaryUploadResult = { original_filename: string; secure_url: string };

const FormSchema = z.object({
  id: z.string(),
  // status: z.enum(['pending', 'paid'], {
  //   invalid_type_error: 'Please select an invoice status.',
  // }),
  name: z.string(),
  description: z.string(),
  originalPrice: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than $0.' }),
  image: z.any(),
});

const CreateFit = FormSchema.omit({ id: true });

export async function createFitAction(prevState: State, formData: FormData) {
  const validatedFields = CreateFit.safeParse({
    name: formData.get('name'),
    description: formData.get('description'),
    originalPrice: Number(formData.get('original-price')),
    image: formData.get('image'),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Fit.',
    };
  }

  // Prepare data for insertion into the database
  const { name, description, originalPrice, image } = validatedFields.data;

  const arrayBuffer = await image.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);
  const uploadResult: CloudinaryUploadResult = await new Promise(
    (resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: 'litera-me',
            tags: ['fits'],
          },
          function (error, result) {
            if (error) {
              reject(error);
              return;
            }

            resolve(
              result as { original_filename: string; secure_url: string },
            );
          },
        )
        .end(buffer);
    },
  );

  const images = [
    {
      name: uploadResult.original_filename,
      url: uploadResult.secure_url,
    },
  ];

  try {
    const fit = await createFit({ name, description, originalPrice, images });

    return fit;
  } catch (error) {
    console.log(error);
    return {
      message: 'Database Error: Failed to Create Fit.',
    };
  }

  revalidatePath('/home/fits');
  redirect('/home/fits');
}
