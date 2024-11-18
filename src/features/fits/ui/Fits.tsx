import { fetchAllFits } from '@local/features/fits/repositories/fitsRepository';
import { FitsItem } from './FitsItem';
import styles from './Fits.module.scss';

export async function Fits() {
  const fits = await fetchAllFits();

  return (
    <div className={styles.Fits}>
      {fits.map((fit) => (
        <FitsItem key={fit.id} fit={fit} />
      ))}
    </div>
  );
}
