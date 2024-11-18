import db from '@local/database/client';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchAllFits() {
  noStore();

  try {
    const fits = await db.fit.findMany();

    return fits;
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

    return fit;
  } catch (error) {
    console.error('Database Error:', error);

    throw new Error(`Failed to fetch the fit with id ${id}.`);
  }
}
