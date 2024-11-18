import styles from './Fit.module.scss';
import { Prisma } from '@prisma/client';
import { fetchFit } from '@local/libs/data';

interface FitProps {
  id: string;
}

export async function Fit({ id }: FitProps) {
  const fit = (await fetchFit(id)) as Prisma.FitUncheckedCreateInput;

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
