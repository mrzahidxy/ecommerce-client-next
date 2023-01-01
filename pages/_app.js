import Head from "next/head";
import Layout from "../comps/layout/Layout";
import "../styles/globals.css";
import "antd/dist/reset.css";
import AdminLayout from "../comps/layout/AdminLAyout";

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(
      
        <Component {...pageProps} />
    
    );
  }

  return (
    <Layout>
      <Head>
        <title>Amar Bebsha</title>
        <meta name="description" content="online small"></meta>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
