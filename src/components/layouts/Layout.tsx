import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { Header } from 'src/components/layouts/Header';
import { Footer } from 'src/components/layouts/Footer';

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => (
  <>
    <Header />
    <Head>
      <link rel='icon' href='/ohv.ico' />
    </Head>
    <main>{children}</main>
    <Footer />
  </>
);
