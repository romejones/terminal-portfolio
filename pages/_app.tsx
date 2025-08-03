import '../style.css'; // or wherever your Tailwind CSS is
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
