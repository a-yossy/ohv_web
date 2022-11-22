import { NextPage, GetStaticProps } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { format, compareDesc } from 'date-fns';
import { client } from 'src/libs/client';
import { Live } from 'src/specific/types/live';
import styles from 'styles/pages/live/index.module.scss';
import { Title } from 'src/components/Title';
import { MicroCMSContents } from 'src/specific/types/microCMSContent';

type Props = {
  data: MicroCMSContents<Live>;
};

const Index: NextPage<Props> = ({ data }) => {
  const lives = data.contents;
  lives.sort((a, b) =>
    compareDesc(new Date(a.performancedAt), new Date(b.performancedAt))
  );

  return (
    <>
      <Head>
        <title>LIVE | Outside Her Vision Official Website</title>
        <meta name='description' content='live' />
      </Head>
      <Title>LIVE</Title>
      {lives.map((live) => (
        <div key={live.id} className={styles.box}>
          <div className={styles.content}>
            <div className={styles.time_place}>
              {format(new Date(live.performancedAt), 'yyyy-MM-dd E')}
              &nbsp;/&nbsp;@{live.place}
            </div>
            {live.title}
            <Link href={`/live/${live.id}`} />
          </div>
        </div>
      ))}
    </>
  );
};

export default Index;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.get({
    endpoint: 'lives',
  });

  return {
    props: {
      data,
    },
  };
};
