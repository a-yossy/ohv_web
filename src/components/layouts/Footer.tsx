import { FC } from 'react';
import {
  FaTwitter,
  FaInstagram,
  FaBandcamp,
  FaSpotify,
  FaApple,
  FaYoutube,
} from 'react-icons/fa';
import styles from 'styles/components/layouts/Footer.module.scss';

export const Footer: FC = () => (
  <footer className={styles.footer}>
    <hr className={styles.line} />
    <div className={styles.icons}>
      <a
        className={styles.icon}
        href='https://twitter.com/outsideher_jp'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FaTwitter size={25} />
      </a>

      <a
        className={styles.icon}
        href='https://www.instagram.com/outsideher_jp/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FaInstagram size={25} />
      </a>

      <a
        className={styles.icon}
        href='https://outsidehervision.bandcamp.com/releases'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FaBandcamp size={25} />
      </a>

      <a
        className={styles.icon}
        href='https://open.spotify.com/artist/7l35Y6R2DssRN9SQwQim2U'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FaSpotify size={25} />
      </a>

      <a
        className={styles.icon}
        href='https://music.apple.com/jp/artist/outside-her-vision/1545088856'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FaApple size={25} />
      </a>

      <a
        className={styles.icon}
        href='https://www.youtube.com/channel/UCv7B5gEHqynAC8LLz0XufcA'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FaYoutube size={25} />
      </a>
    </div>
  </footer>
);
