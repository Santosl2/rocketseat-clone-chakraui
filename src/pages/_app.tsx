/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
import type { AppProps } from "next/app";

import { theme } from "@/themes/setTheme";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";

import "../../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
