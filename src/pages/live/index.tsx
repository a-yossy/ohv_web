import { NextPage, GetStaticProps } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { format, compareDesc } from 'date-fns';
import { client } from 'src/libs/client';
import { Live } from 'src/features/types/live';
import styles from 'styles/pages/live/index.module.scss';
import { Title } from 'src/components/Title';
import { MicroCMSContents } from 'src/features/types/microCMSContent';
import {
  ALL_LIVES_QUERY_PARAMETER,
  MICRO_CMS_END_POINTS,
} from 'src/features/constants/microCMS';
import { useRouter } from 'next/router';

type Props = {
  data: MicroCMSContents<Live>;
};

const Index: NextPage<Props> = ({ data }) => {
  const lives = data.contents
    .slice()
    .sort((a, b) =>
      compareDesc(new Date(a.performancedAt), new Date(b.performancedAt))
    );

  const PER_PAGE = 9;
  const TOTAL_PAGE = Math.ceil(lives.length / PER_PAGE);
  const FIRST_PAGE = 1;
  const router = useRouter();
  const pageParam = Array.isArray(router.query.page)
    ? router.query.page[0]
    : router.query.page;
  const page = Number(pageParam) || FIRST_PAGE;

  return (
    <>
      <Head>
        <title>LIVE | Outside Her Vision Official Website</title>
        <meta name='description' content='ライブページ' />
      </Head>
      <Title>LIVE</Title>
      {lives.slice((page - 1) * PER_PAGE, page * PER_PAGE).map((live) => (
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
      <div className={styles.pager}>
        <div className={styles.content}>
          {page !== FIRST_PAGE && (
            <button
              className={styles.prev}
              onClick={() => router.push(`${router.pathname}?page=${page - 1}`)}
            >
              前へ
            </button>
          )}
          <span className={styles.page}>{`${page}ページ`}</span>
          {page < TOTAL_PAGE && (
            <button
              className={styles.next}
              onClick={() => router.push(`${router.pathname}?page=${page + 1}`)}
            >
              次へ
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Index;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.get({
    endpoint: `${MICRO_CMS_END_POINTS.live}?${ALL_LIVES_QUERY_PARAMETER}`,
  });

  return {
    props: {
      data,
    },
  };
};
