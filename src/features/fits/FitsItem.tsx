import Link from 'next/link';
import styles from './Fit.module.scss';
import formatMoney from '@local/libs/formatMoney';
import { FitTitle } from './FitTitle';
import { FitPriceTag } from './FitPriceTag';
import { Prisma } from '@prisma/client';

interface FitsItemProps {
  fit: Prisma.FitUncheckedCreateInput;
}

export function FitsItem({ fit }: FitsItemProps) {
  return (
    <div className={styles.FitsItem}>
      {/* {fit.image && <img src={fit.image} alt={fit.name} />} */}
      <FitTitle>
        <Link
          href={{
            pathname: `/home/fits/${fit.id}`,
          }}
        >
          {fit.name}
        </Link>
      </FitTitle>
      <FitPriceTag>
        {fit.currentPrice && formatMoney(fit.currentPrice)}
      </FitPriceTag>
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
