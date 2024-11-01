import React from 'react'
import styles from './FamilyMemberCard.module.scss';

interface FamilyMemberCardProps {
  link: string;
  icon: string;
  name: string;
  description: string;
}

export default function FamilyMemberCard({ link, icon, name, description }: FamilyMemberCardProps) {
  return (
    <a
      href={link}
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2>{icon} <span>{name}</span></h2>
      <p>{description}</p>
    </a>
  )
}
