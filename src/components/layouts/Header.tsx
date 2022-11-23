import { FC, useState, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaBars } from 'react-icons/fa';
import { TfiClose } from 'react-icons/tfi';
import { Menu } from 'src/components/layouts/Menu';
import styles from 'styles/components/layouts/Header.module.scss';

export const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Menu isOpen={isOpen} handleClose={handleClose} />
      <header className={styles.header}>
        <div className={styles.links}>
          <div className={styles.lefts}>
            <Link
              className={styles.logo}
              href='/'
              onClick={router.asPath === '/' ? handleClose : undefined}
            >
              Outside Her Vision
            </Link>
          </div>
          <div className={styles.rights}>
            <button className={styles.no_decoration}>
              {isOpen && <TfiClose size={20} onClick={handleClose} />}
              {!isOpen && <FaBars size={20} onClick={handleOpen} />}
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
    </>
  );
};
