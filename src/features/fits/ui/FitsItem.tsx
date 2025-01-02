'use client';

import Link from 'next/link';
import styles from './FitsItem.module.scss';
import formatMoney from '@local/features/fits/utils/formatMoney';
import { FitTitle } from '@local/features/fits/ui/FitTitle';
import { FitPriceTag } from '@local/features/fits/ui/FitPriceTag';
import { Prisma } from '@prisma/client';
import { CldImage as Image } from 'next-cloudinary';

interface FitsItemProps {
  fit: Prisma.FitUncheckedCreateInput;
}

export function FitsItem({ fit }: FitsItemProps) {
  return (
    <div className={styles.FitsItem}>
      {fit.images[0] && (
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
      <div className="buttonList">
        <Link
          href={{
            pathname: `/home/fits/${fit.id}/update`,
          }}
        >
          Edit ✏️
        </Link>
      </div>
    </div>
  );
}
