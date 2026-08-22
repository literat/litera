'use client';

import styles from './Fit.module.scss';
import { CldImage as Image } from 'next-cloudinary';
import { Flex, Grid, Heading, Text } from '@radix-ui/themes';

export function Fit({ fit }: any) {
  const { images, name, description } = fit;

  return (
    <Grid columns="2" gap="6">
      {images[0]?.url && (
        <Image
          className={styles.image}
          src={images[0].url}
          alt=""
          width={200}
          height={200}
        />
      )}
      <Flex direction="column" gap="3">
        <Heading as="h2" size="6">
          Viewing {name}
        </Heading>
        <Text as="p" color="gray">
          {description}
        </Text>
      </Flex>
    </Grid>
  );
}
