import React from 'react';
import { Card, Flex, Heading, Text } from '@radix-ui/themes';
import styles from './FamilyMemberCard.module.scss';

interface FamilyMemberCardProps {
  link: string;
  icon: string;
  name: string;
  description: string;
}

export default function FamilyMemberCard({
  link,
  icon,
  name,
  description,
}: FamilyMemberCardProps) {
  return (
    <Card asChild size="3">
      <a
        href={link}
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Flex direction="column" align="center" gap="2">
          <Heading as="h2" size="4">
            {icon} <span className={styles.name}>{name}</span>
          </Heading>
          <Text as="p" color="gray" align="center">
            {description}
          </Text>
        </Flex>
      </a>
    </Card>
  );
}
