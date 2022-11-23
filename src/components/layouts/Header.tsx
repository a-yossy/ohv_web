import { FC } from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import styles from 'styles/components/layouts/Header.module.scss';

export const Header: FC = () => (
  <header className={styles.header}>
    <div className={styles.links}>
      <div className={styles.lefts}>
        <Link className={styles.logo} href='/'>
          Outside Her Vision
        </Link>
      </div>
      <div className={styles.rights}>
        <button className={styles.no_decoration}>
          <FaBars size={20} />
        </button>
        <Link className={styles.link} href='/'>
          BIO
        </Link>
        <Link className={styles.link} href='/live'>
          LIVE
        </Link>
        <Link className={styles.link} href='/music'>
          MUSIC
        </Link>
        <Link className={styles.link} href='/video'>
          VIDEO
        </Link>
      </div>
    </div>
  </header>
);
