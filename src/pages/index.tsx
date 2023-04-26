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
      <meta
        property='og:image'
        content='https://ohv-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftop.9a412c2d.jpg&w=3840&q=75'
      />
      <meta name='twitter:card' content='summary_large_image' />
      <meta property='og:url' content='https://ohv-web.vercel.app/' />
      <meta property='og:type' content='website' />

      <meta
        property='og:site_name'
        content='Outside Her Vision Official Website'
      />
      <meta name='twitter:site' content='@OutsideHer_jp' />
    </Head>
    <div className={styles.image_container}>
      <Image className={styles.image} src={topImage} alt='トップページ画像' />
    </div>
  </>
);

export default Top;
