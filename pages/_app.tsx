import { Layout } from 'src/components/layout/Layout';
import '../styles/globals.css';
import '../styles/reset.css';

import Amplify from 'aws-amplify';
import awsconfig from 'src/aws-exports';
Amplify.configure(awsconfig);

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
