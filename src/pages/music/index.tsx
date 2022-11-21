import type { NextPage, GetStaticProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { compareDesc } from 'date-fns';
import { client } from 'src/libs/client';
import { Music } from 'src/specific/types/music';
import styles from 'styles/pages/music/index.module.scss';

type Props = {
  data: {
    contents: Music[];
  };
};

const Index: NextPage<Props> = ({ data }) => {
  const musics = data.contents;
  musics.sort((a, b) =>
    compareDesc(new Date(a.releasedAt), new Date(b.releasedAt))
  );

  return (
    <>
      <Head>
        <title>MUSIC | Outside Her Vision Official Website</title>
        <meta name='description' content='music' />
      </Head>
      <div className={styles.title}>MUSIC</div>
      {musics.map((music) => (
        <div key={music.id}>
          <div className={styles.imageContainer}>
            <Link href={`/music/${music.id}`}>
              <Image
                className={styles.image}
                src={music.image.url}
                alt={music.title}
                fill={true}
              />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Index;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.get({
    endpoint: 'musics',
  });

  return {
    props: {
      data,
    },
  };
};
