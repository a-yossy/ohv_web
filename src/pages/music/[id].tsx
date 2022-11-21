import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import { client } from 'src/libs/client';
import { Music } from 'src/specific/types/music';
import NotFoundError from 'src/pages/404';
import styles from 'styles/pages/music/[id].module.scss';
import { format } from 'date-fns';

type Props = {
  music: Music | undefined;
};

const Music: NextPage<Props> = ({ music }) => {
  if (music === undefined) return <NotFoundError />;

  return (
    <>
      <Head>
        <title>{music.title} | Outside Her Vision Official Website</title>
        <meta name='description' content='Top' />
      </Head>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={music.image.url}
          alt={music.title}
          fill={true}
        />
      </div>
      <div className={styles.description}>
        <div className={styles.type}>{music.type}</div>
        <div className={styles.title}>{music.title}</div>
        <div className={styles.release}>
          {format(new Date(music.releasedAt), 'yyyy-MM-dd')}&nbsp;RELEASE
        </div>
        <hr className={styles.line} />
        <div className={styles.song}>{music.song}</div>
        <hr className={styles.line} />
        {music.price && <div>Price: ¥{music.price}</div>}
        <div className={styles.link}>
          <a href={music.link} target='_blank' rel='noopener noreferrer'>
            音源はこちら
          </a>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data: { contents: Music[] } = await client.get({
    endpoint: 'musics',
  });

  return {
    paths: data.contents.map((music) => ({ params: { id: music.id } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params !== undefined && typeof params.id === 'string') {
    const music = await client.get({
      endpoint: 'musics',
      contentId: params.id,
    });

    return {
      props: {
        music,
      },
    };
  }

  return {
    props: {},
  };
};

export default Music;
