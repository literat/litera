import db from '@local/libs/db';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchFits() {
  noStore();

  try {
    const fits = await db.fit.findMany();

    return fits;
  } catch (error) {
    console.error('Database Error:', error);

    throw new Error('Failed to fetch the fits.');
  }
}

export async function fetchFit(id: string) {
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
