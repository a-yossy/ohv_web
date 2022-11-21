import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import topImage from 'public/top.jpg';
import styles from 'styles/pages/index.module.scss';

const Top: NextPage = () => (
  <>
    <Head>
      <title>Outside Her Vision Official Website</title>
      <meta name='description' content='top' />
    </Head>
    <div className={styles.imageContainer}>
      <Image className={styles.image} src={topImage} alt='トップページ画像' />
    </div>
  </>
);

export default Top;
