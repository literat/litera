import db from '@local/database/client';
import { unstable_noStore as noStore } from 'next/cache';

type FitImage = {
  id: string;
  name: string;
  url: string | null;
  createdAt: Date;
};
type UploadedIages = { name: string; url: string };

type FitValues = {
  name: string;
  description: string;
  originalPrice: number;
};

type Fit = {
  id: string;
} & FitValues;

type FitWithImages = Fit & {
  images: FitImage[];
};

type NewFit = FitValues & {
  images: UploadedIages[];
};

export async function fetchAllFits() {
  noStore();

  try {
    const fits = await db.fit.findMany();

    // for each fit id
    const fitImagesPromises = fits.map((fit) => fetchFitImages(fit.id));

    // create promise with fetching images

    // and call Promise.all to wait for all promises to resolve
    const fitImages = await Promise.all(fitImagesPromises);

    // then map the images to the fits base on id
    // index should not match the id of the fit
    const fitsWithImages = fits.map((fit, index) => {
      return { ...fit, images: fitImages[index] };
    });

    return fitsWithImages;
  } catch (error) {
    console.error('Database Error:', error);

    throw new Error('Failed to fetch the fits.');
  }
}

export async function fetchFitById(id: string) {
  try {
    const fit = await db.fit.findUnique({
      where: {
        id,
      },
    });

    let fitImages: FitImage[] = [];
    if (fit !== null && fit.id !== null) {
      fitImages = await fetchFitImages(fit.id);
    }

    return { ...fit, images: fitImages };
  } catch (error) {
    console.error('Database Error:', error);

    throw new Error(`Failed to fetch the fit with id ${id}.`);
  }
}

export async function fetchFitImages(fitId: string) {
  const fitImages = await db.imageRelation.findMany({
    where: {
      entityId: fitId,
      entityType: 'Fit',
    },
    include: {
      image: true,
    },
  });

  return fitImages.map((img) => img.image);
}

export async function createFit({
  name,
  description,
  originalPrice,
  images,
}: NewFit) {
  try {
    const result = await db.$transaction(async (tx) => {
      const fit = await tx.fit.create({
        data: {
          name,
          description,
          originalPrice,
        },
      });

      const imageRelations = await Promise.all(
        images.map(async (img, index) => {
          const image = await tx.image.create({
            data: {
              name: img.name,
              url: img.url,
              relations: {
                create: {
                  entityId: fit.id, // Use fit's ID
                  entityType: 'Fit', // Hardcode the type
                  sortOrder: index, // Use array index for order
                },
              },
            },
          });

          return image;
        }),
      );

      return { ...fit, images: imageRelations };
    });

    return result;
  } catch (error) {
    console.error('Database Error:', error);

    throw new Error(`Failed to create the fit`);
  }
}
