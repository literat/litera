'use client';

import Link from 'next/link';
import styles from './FitsItem.module.scss';
import formatMoney from '@local/features/fits/utils/formatMoney';
import { FitTitle } from '@local/features/fits/ui/FitTitle';
import { FitPriceTag } from '@local/features/fits/ui/FitPriceTag';
import { CldImage as Image } from 'next-cloudinary';
import { SegmentedControl } from '@local/ui/SegmentedControl';

interface FitsItemProps {
  fit: any;
}

export function FitsItem({ fit }: FitsItemProps) {
  return (
    <div className={styles.FitsItem}>
      {fit?.images[0] && (
        <Image
          src={fit.images[0].url}
          alt={fit.name}
          width={400}
          height={400}
        />
      )}
      <FitTitle>
        <Link
          href={{
            pathname: `/home/fits/${fit.id}`,
          }}
        >
          {fit.name}
        </Link>
      </FitTitle>
      {fit.currentPrice && (
        <FitPriceTag>{formatMoney(fit.currentPrice)}</FitPriceTag>
      )}
      <p>{fit.description}</p>
      <SegmentedControl>
        <Link
          href={{
            pathname: `/home/fits/${fit.id}/update`,
          }}
        >
          Edit ✏️
        </Link>
      </SegmentedControl>
    </div>
  );
}
