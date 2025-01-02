'use client';

import styles from './Fit.module.scss';
import { CldImage as Image } from 'next-cloudinary';

export function Fit({ fit }) {
  const { images, name, description } = fit;

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
