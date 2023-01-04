import Head from "next/head";
import Layout from "../comps/layout/Layout";
import "../styles/globals.css";
import "antd/dist/reset.css";
import { SessionProvider } from "next-auth/react";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [dark, setDark] = useState("");
  const [render, setRender] = useState(false);

  if (Component.getLayout) {
    return Component.getLayout(
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    );
  }

  //dark mode function
  // const darkMode = () => {
  //   typeof window !== "undefined" && localStorage.setItem("mode", "dark");
  //   setRender(!render);
  // };
  // const lightMode = () => {
  //   typeof window !== "undefined" && localStorage.setItem("mode", "");
  //   setRender(!render);
  // };

  // useEffect(() => {
  //   setDark(localStorage.getItem("mode"));
  // }, [render]);

  return (
    <div className={`${dark}`}>
      <div className="w-full space-x-2 dark:bg-gray-800 ">
        <button onClick={() => setDark("dark")} className="dark:text-white p-1">
          On
        </button>
        <button
          onClick={() => setDark("")}
          className="bg-black text-white dark:bg-white dark:text-black p-1"
        >
          Off
        </button>
      </div>
      <SessionProvider session={session}>
        <Layout>
          <Head>
            <title>Amar Bebsha</title>
            <meta name="description" content="online small"></meta>
          </Head>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </div>
  );
}

export default MyApp;
