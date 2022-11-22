import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { compareDesc } from 'date-fns';
import { Video } from 'src/features/types/video';
import styles from 'styles/pages/video.module.scss';
import { client } from 'src/libs/client';
import { MicroCMSContents } from 'src/features/types/microCMSContent';
import { Title } from 'src/components/Title';
import { MICRO_CMS_END_POINTS } from 'src/features/constants/microCMS';

type Props = {
  data: MicroCMSContents<Video>;
};

const Video: NextPage<Props> = ({ data }) => {
  const videos = data.contents;
  videos.sort((a, b) =>
    compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
  );

  return (
    <>
      <Head>
        <title>VIDEO | Outside Her Vision Official Website</title>
        <meta name='description' content='video' />
      </Head>
      <div>
        <Title>VIDEO</Title>
        {videos.map((video) => (
          <div key={video.id} className={styles.video}>
            <iframe
              width='560'
              height='315'
              src={`https://www.youtube.com/embed/${video.youtubeIdentifier}`}
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
            <br />
            <div className={styles.videoTitle}>{video.title}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Video;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.get({
    endpoint: MICRO_CMS_END_POINTS.video,
  });

  return {
    props: {
      data,
    },
  };
};
