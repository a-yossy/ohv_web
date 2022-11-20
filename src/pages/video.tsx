import type { NextPage } from 'next';
import videoData from 'src/data/video.json';
import styles from 'styles/pages/video.module.scss';
import { compareDesc } from 'date-fns';

const Video: NextPage = () => {
  const videos = videoData.sort((a, b) =>
    compareDesc(new Date(a.publishedOn), new Date(b.publishedOn))
  );

  return (
    <div>
      <div className={styles.title}>VIDEO</div>
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
          {video.title}
        </div>
      ))}
    </div>
  );
};

export default Video;
