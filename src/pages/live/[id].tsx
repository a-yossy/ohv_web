import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { format } from 'date-fns';
import { client } from 'src/libs/client';
import { Live } from 'src/specific/types/live';
import NotFoundError from 'src/pages/404';
import styles from 'styles/pages/live/[id].module.scss';
import { MicroCMSContents } from 'src/specific/types/microCMSContent';

type Props = {
  live?: Live;
};

type Params = {
  id: string;
};

const Live: NextPage<Props> = ({ live }) => {
  if (live === undefined) return <NotFoundError />;

  return (
    <>
      <Head>
        <title>{live.title} | Outside Her Vision Official Website</title>
        <meta name='description' content='live detail' />
      </Head>
      <div className={styles.image_container}>
        <Image
          className={styles.image}
          src={live.image.url}
          alt={live.title}
          fill={true}
        />
      </div>
      <div className={styles.description}>
        <div className={styles.time_place}>
          {format(new Date(live.performancedAt), 'yyyy-MM-dd E')}&nbsp;/&nbsp;@
          {live.place}
        </div>
        <div className={styles.title}>{live.title}</div>
        <hr className={styles.line} />
        <div className={styles.detail}>{live.detail}</div>
      </div>
    </>
  );
};

export default Live;

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const data: MicroCMSContents<Live> = await client.get({
    endpoint: 'lives',
  });

  return {
    paths: data.contents.map((live) => ({ params: { id: live.id } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  if (params !== undefined && typeof params.id === 'string') {
    const live = await client.get({
      endpoint: 'lives',
      contentId: params.id,
    });

    return {
      props: {
        live,
      },
    };
  }

  return {
    props: {},
  };
};
