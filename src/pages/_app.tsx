import "@styles/globals.css";
import Head from "next/head";
import { CacheProvider } from "@emotion/react";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { createEmotionCache } from "../utils/create-emotion-cache";
import { theme } from "../theme";
import type { AppProps } from "next/app";
import { ReactNode, useEffect, useState } from "react";
import { NextPage } from "next";
import React from "react";
import { ConfirmProvider } from "material-ui-confirm";
const clientSideEmotionCache = createEmotionCache();

type GetLayout = (page: ReactNode) => ReactNode;

type Page<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: GetLayout;
};

type MyAppProps<P = {}> = AppProps<P> & {
  emotionCache: any;
  Component: Page<P>;
};
function MyApp(props: MyAppProps): JSX.Element {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);
  const [mouted, setMouted] = useState(false);

  useEffect(() => setMouted(true), []);

  if (!mouted) return null as any;
  return (
    <>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>Pro</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        {/* <LocalizationProvider dateAdapter={AdapterDateFns}> */}
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <CssBaseline />
            <ConfirmProvider>
              {getLayout(<Component {...pageProps} />)}
            </ConfirmProvider>
          </React.Fragment>
        </ThemeProvider>

        {/* </LocalizationProvider> */}
      </CacheProvider>
    </>
  );
}

export default MyApp;
