'use client';

import Link from 'next/link';
import styles from './FitsItem.module.scss';
import formatMoney from '@local/features/fits/utils/formatMoney';
import { FitTitle } from '@local/features/fits/ui/FitTitle';
import { FitPriceTag } from '@local/features/fits/ui/FitPriceTag';
import { CldImage as Image } from 'next-cloudinary';
import { Button, Card, Flex, Inset, Text } from '@radix-ui/themes';
import { Pencil1Icon } from '@radix-ui/react-icons';

interface FitsItemProps {
  fit: any;
}

export function FitsItem({ fit }: FitsItemProps) {
  return (
    <Card size="2" className={styles.FitsItem}>
      <Flex direction="column" gap="3">
        {fit?.images[0] && (
          <Inset side="top" clip="padding-box">
            <Image
              className={styles.image}
              src={fit.images[0].url}
              alt={fit.name}
              width={400}
              height={400}
            />
          </Inset>
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
        <Text as="p" color="gray">
          {fit.description}
        </Text>
        <Button asChild variant="soft" size="2">
          <Link
            href={{
              pathname: `/home/fits/${fit.id}/update`,
            }}
          >
            <Pencil1Icon /> Edit
          </Link>
        </Button>
      </Flex>
    </Card>
  );
}
