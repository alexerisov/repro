import { ReactElement, ReactNode } from "react";

import { CacheProvider, EmotionCache } from "@emotion/react";
import { NextPage } from "next";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import ErrorBoundary from "~components/shared/ErrorBoundary/ErrorBoundary";
import { withEffector } from "~nextjs-effector";
import "~shared/config/globals.css";
import { createEmotionCache } from "~shared/lib/utils/createEmotionCache";

const clientSideEmotionCache = createEmotionCache();

interface AppWithCacheProps extends AppProps {
  emotionCache: EmotionCache;
  Component: NextPageWithLayout;
}

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

function App({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps: { session, ...pageProps }
}: AppWithCacheProps) {
  const getLayout = Component.getLayout ?? (page => page);
  return (
    <ErrorBoundary>
      <SessionProvider
        session={session}
        refetchOnWindowFocus={false}
        refetchInterval={0}>
        <CacheProvider value={emotionCache}>
          {getLayout(<Component {...pageProps} />)}
        </CacheProvider>
      </SessionProvider>
    </ErrorBoundary>
  );
}

export default withEffector(App);
