import type { NextPage } from 'next';
import Head from 'next/head';
import styles from 'styles/pages/404.module.scss';

const NotFoundError: NextPage = () => (
  <>
    <Head>
      <title>Not Found | Outside Her Vision Official Website</title>
      <meta name='description' content='page not found' />
    </Head>
    <div className={styles.title}>ページが見つかりません</div>
  </>
);

export default NotFoundError;
