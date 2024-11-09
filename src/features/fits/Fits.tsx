import { fetchFits } from '@local/libs/data';
import { FitsItem } from './FitsItem';
import styles from './Fits.module.scss';

export async function Fits() {
  const fits = await fetchFits();

  return (
    <div className={styles.Fits}>
      {fits.map((fit) => (
        <FitsItem key={fit.id} fit={fit} />
      ))}
    </div>
  );
}
