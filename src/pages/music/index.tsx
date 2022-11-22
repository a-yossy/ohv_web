import type { NextPage, GetStaticProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { compareDesc } from 'date-fns';
import { client } from 'src/libs/client';
import { Music } from 'src/features/types/music';
import styles from 'styles/pages/music/index.module.scss';
import { MicroCMSContents } from 'src/features/types/microCMSContent';
import { Title } from 'src/components/Title';
import { MICRO_CMS_END_POINTS } from 'src/features/constants/microCMS';

type Props = {
  data: MicroCMSContents<Music>;
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
      <Title>MUSIC</Title>
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
    endpoint: MICRO_CMS_END_POINTS.music,
  });

  return {
    props: {
      data,
    },
  };
};
