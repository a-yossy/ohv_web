import { FC, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from 'styles/components/layouts/Menu.module.scss';

type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

export const Menu: FC<Props> = ({ isOpen, handleClose }) => {
  const router = useRouter();

  useEffect(() => {
    handleClose();
  }, [handleClose, router.asPath]);

  return (
    <>
      {isOpen ? (
        <div id='overlay'>
          <Link
            href='/'
            onClick={router.asPath === '/' ? handleClose : undefined}
          >
            <div className={styles.modal_contents}>BIO</div>
          </Link>
          <Link
            href='/live'
            onClick={router.asPath === '/live' ? handleClose : undefined}
          >
            <div className={styles.modal_contents}>LIVE</div>
          </Link>
          <Link
            href='/music'
            onClick={router.asPath === '/music' ? handleClose : undefined}
          >
            <div className={styles.modal_contents}>MUSIC</div>
          </Link>
          <Link
            href='/video'
            onClick={router.asPath === '/video' ? handleClose : undefined}
          >
            <div className={styles.modal_contents}>VIDEO</div>
          </Link>
        </div>
      ) : null}
    </>
  );
};
