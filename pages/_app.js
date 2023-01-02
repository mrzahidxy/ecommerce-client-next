import Head from "next/head";
import Layout from "../comps/layout/Layout";
import "../styles/globals.css";
import "antd/dist/reset.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <SessionProvider session={session}>
      <Layout>
        <Head>
          <title>Amar Bebsha</title>
          <meta name="description" content="online small"></meta>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
