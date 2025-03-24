import { type AppType } from "next/app";
import { Analytics } from "@vercel/analytics/react"
import Head from "next/head";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Jean Schoenlaub </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Portfolio of Jean Schoenlaub, a data engineer passionate about sustainability."
        />
        <meta
          name="keywords"
          content="Jean Schoenlaub, portfolio, data engineer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps}/>
      <Analytics />
    </>
  );
};

export default MyApp;
