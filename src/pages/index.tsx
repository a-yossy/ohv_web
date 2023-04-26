import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import topImage from 'public/top.jpg';
import styles from 'styles/pages/index.module.scss';

const Top: NextPage = () => (
  <>
    <Head>
      <title>Outside Her Vision Official Website</title>
      <meta property='og:title' content='Outside Her Vision Official Website' />
      <meta property='og:description' content='トップページ' />
      <meta property='og:image' content='https://ohv-web.vercel.app/' />
      <meta name='twitter:card' content='summary_large_image' />
    </Head>
    <div className={styles.image_container}>
      <Image className={styles.image} src={topImage} alt='トップページ画像' />
    </div>
  </>
);

export default Top;
