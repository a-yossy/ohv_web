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
import { ChangeEvent, useEffect, useState } from 'react';

type Props = {
  data: MicroCMSContents<Live>;
};

const Index: NextPage<Props> = ({ data }) => {
  const router = useRouter();
  const lives = data.contents
    .slice()
    .sort((a, b) =>
      compareDesc(new Date(a.performancedAt), new Date(b.performancedAt))
    );

  const liveMonths = Array.from(
    new Set(
      lives
        .slice()
        .map((live) => format(new Date(live.performancedAt), 'yyyy-MM'))
    )
  );

  const [sort, setSort] = useState<string>('all');
  const [sortedLives, setSortedLives] = useState(lives);

  useEffect(() => {
    const sortParam = Array.isArray(router.query.sort)
      ? router.query.sort[0]
      : router.query.sort;
    if (sortParam === undefined) {
      setSort('all');
      setSortedLives(lives);
    } else {
      setSort(liveMonths.includes(sortParam) ? sortParam : 'all');
      setSortedLives(
        sort === 'all'
          ? lives
          : lives
              .slice()
              .filter(
                (live) =>
                  format(new Date(live.performancedAt), 'yyyy-MM') === sort
              )
      );
    }
  }, [router.query.sort, sort]);

  const PER_PAGE = 5;
  const TOTAL_PAGE = Math.ceil(sortedLives.length / PER_PAGE);
  const FIRST_PAGE = 1;
  const pageParam = Array.isArray(router.query.page)
    ? router.query.page[0]
    : router.query.page;
  const page = Number(pageParam) || FIRST_PAGE;

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    router.push(`${router.pathname}?sort=${e.target.value}`);
  };

  return (
    <>
      <Head>
        <title>LIVE | Outside Her Vision Official Website</title>
        <meta name='description' content='ライブページ' />
      </Head>
      <Title>LIVE</Title>
      <select onChange={(e) => handleChange(e)} value={sort}>
        <option value='all'>all</option>
        {liveMonths.map((liveMonth) => (
          <option value={liveMonth} key={liveMonth}>
            {liveMonth}
          </option>
        ))}
      </select>
      {sortedLives.slice((page - 1) * PER_PAGE, page * PER_PAGE).map((live) => (
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
              onClick={() =>
                router.push(`${router.pathname}?page=${page - 1}&sort=${sort}`)
              }
            >
              前へ
            </button>
          )}
          <span className={styles.page}>{`${page}ページ`}</span>
          {page < TOTAL_PAGE && (
            <button
              className={styles.next}
              onClick={() =>
                router.push(`${router.pathname}?page=${page + 1}&sort=${sort}`)
              }
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
