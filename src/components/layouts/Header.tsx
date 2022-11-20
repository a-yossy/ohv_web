import { FC } from 'react';
import Link from 'next/link';
import styles from 'styles/components/layouts/Header.module.scss';

export const Header: FC = () => (
  <header className={styles.header}>
    <div className={styles.leftLinks}>
      <Link className={styles.logo} href='/'>
        Outside Her Vision
      </Link>
    </div>
    <div className={styles.rightLinks}>
      <Link className={styles.rightLink} href='/'>
        NEWS
      </Link>
      <Link className={styles.rightLink} href='/'>
        LIVE
      </Link>
      <Link className={styles.rightLink} href='/'>
        MUSIC
      </Link>
      <Link className={styles.rightLink} href='/video'>
        VIDEO
      </Link>
    </div>
  </header>
);
