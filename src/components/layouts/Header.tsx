import { FC } from 'react';
import Link from 'next/link';
import styles from 'styles/components/layouts/Header.module.scss';

export const Header: FC = () => (
  <header className={styles.header}>
    <Link href='/'>Outside Her Vision</Link>
  </header>
);
