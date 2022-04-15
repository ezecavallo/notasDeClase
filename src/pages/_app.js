import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "../components/Layout";
import theme from "../Theme";

import "../assets/styles/master.css";
import "katex/dist/katex.min.css";

// This default export is required in a new `pages/_app.js` file.
export default function _App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
