import styles from './Fit.module.scss';
import { Prisma } from '@prisma/client';
import { fetchFitById } from '@local/features/fits/repositories/fitsRepository';

interface FitProps {
  id: string;
}

export async function Fit({ id }: FitProps) {
  const fit = (await fetchFitById(id)) as Prisma.FitUncheckedCreateInput;

  return (
    <div className={styles.Fit}>
      {/* <img src={item.largeImage} alt={item.title} /> */}
      <div className="details">
        <h2>Viewing {fit.name}</h2>
        <p>{fit.description}</p>
      </div>
    </div>
  );
}
