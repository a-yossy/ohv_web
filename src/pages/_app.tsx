import type { AppProps } from 'next/app';
import { Layout } from 'src/components/layouts/Layout';
import 'styles/global.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
