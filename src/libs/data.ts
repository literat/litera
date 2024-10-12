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
