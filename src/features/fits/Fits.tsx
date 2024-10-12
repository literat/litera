import { fetchFits } from '@local/libs/data';
import { Fit } from './Fit';
import styles from './Fits.module.scss';

export async function Fits() {
  const fits = await fetchFits();

  return (
    <div className={styles.Fits}>
      {fits.map((fit) => (
        <Fit key={fit.id} fit={fit} />
      ))}
    </div>
  );
}
