import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { format } from 'date-fns';
import { client } from 'src/libs/client';
import { Live } from 'src/features/types/live';
import NotFoundError from 'src/pages/404';
import styles from 'styles/pages/live/[id].module.scss';
import { MicroCMSContents } from 'src/features/types/microCMSContent';
import {
  ALL_LIVES_QUERY_PARAMETER,
  MICRO_CMS_END_POINTS,
} from 'src/features/constants/microCMS';

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
        <meta name='description' content='ライブ詳細ページ' />
      </Head>
      <div className={styles.image_container}>
        <Image
          className={styles.image}
          src={live.image.url}
          alt={live.title}
          width={Number(live.image.width)}
          height={Number(live.image.height)}
        />
      </div>
      <div className={styles.description}>
        <div className={styles.time_place}>
          {format(new Date(live.performancedAt), 'yyyy-MM-dd E')}&nbsp;/&nbsp;@
          {live.place}
        </div>
        <div className={styles.title}>{live.title}</div>
        <hr className={styles.line} />
        <div className={styles.detail}>
          act/
          {`\n`}
          {live.act}
          {`\n`}
          {`\n`}
          OPEN&nbsp;
          {live.openedAt ? format(new Date(live.openedAt), 'HH:mm') : 'TBA'}
          &nbsp;/&nbsp;START&nbsp;
          {live.startedAt ? format(new Date(live.startedAt), 'HH:mm') : 'TBA'}
          {`\n`}
          ADV&nbsp;
          {live.advPrice || live.advPrice === 0
            ? new Intl.NumberFormat('ja-JP', {
                style: 'currency',
                currency: 'JPY',
              }).format(live.advPrice)
            : 'TBA'}
          {live.existsDrink && ` + 1DRINK`}&nbsp;/&nbsp;DOOR&nbsp;
          {live.doorPrice || live.doorPrice === 0
            ? new Intl.NumberFormat('ja-JP', {
                style: 'currency',
                currency: 'JPY',
              }).format(live.doorPrice)
            : 'TBA'}
          {live.existsDrink && ` + 1DRINK`}
        </div>
      </div>
    </>
  );
};

export default Live;

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const data: MicroCMSContents<Live> = await client.get({
    endpoint: `${MICRO_CMS_END_POINTS.live}?${ALL_LIVES_QUERY_PARAMETER}`,
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
      endpoint: MICRO_CMS_END_POINTS.live,
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
