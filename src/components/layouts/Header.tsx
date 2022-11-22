import { FC } from 'react';
import Link from 'next/link';
import styles from 'styles/components/layouts/Header.module.scss';

export const Header: FC = () => (
  <header className={styles.header}>
    <div className={styles.left_links}>
      <Link className={styles.logo} href='/'>
        Outside Her Vision
      </Link>
    </div>
    <div className={styles.right_links}>
      <Link className={styles.right_link} href='/'>
        BIO
      </Link>
      <Link className={styles.right_link} href='/live'>
        LIVE
      </Link>
      <Link className={styles.right_link} href='/music'>
        MUSIC
      </Link>
      <Link className={styles.right_link} href='/video'>
        VIDEO
      </Link>
    </div>
  </header>
);
