import styles from './Fit.module.scss';
import { Prisma } from '@prisma/client';
import { fetchFitById } from '@local/features/fits/repositories/fitsRepository';
import Image from 'next/image';

interface FitProps {
  id: string;
}

export async function Fit({ id }: FitProps) {
  const { images, name, description } = await fetchFitById(id);

  return (
    <div className={styles.Fit}>
      {images[0]?.url && (
        <Image src={images[0].url} alt="" width={200} height={200} />
      )}
      <div className="details">
        <h2>Viewing {name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
