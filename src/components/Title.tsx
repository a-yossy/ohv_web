import { FC, ReactNode } from 'react';
import styles from 'styles/components/Title.module.scss';

type Props = {
  children: ReactNode;
};

export const Title: FC<Props> = ({ children }) => (
  <div className={styles.title}>{children}</div>
);
