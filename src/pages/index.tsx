import type { NextPage } from 'next';
import Image from 'next/image';
import topImage from 'public/top.jpg';
import styles from 'styles/pages/index.module.scss';

const Top: NextPage = () => (
  <div className={styles.top}>
    <Image className={styles.image} src={topImage} alt='トップページ画像' />
  </div>
);

export default Top;
