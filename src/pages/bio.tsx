import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import bioImage from 'public/bio.jpg';
import styles from 'styles/pages/bio.module.scss';

const Bio: NextPage = () => (
  <>
    <Head>
      <title>BIO | Outside Her Vision Official Website</title>
      <meta name='description' content='BIOページ'></meta>
    </Head>
    <div className={styles.image_container}>
      <Image className={styles.image} src={bioImage} alt='BIOページ画像' />
    </div>
  </>
);

export default Bio;
