import React, { ReactNode } from "react";

import Head from "next/head";
import { Header } from "~components/shared/Header/Header";
import { LoadingSpinner } from "~components/shared/LoadingSpinner/LoadingSpinner";
import { useAuth } from "~shared/lib/utils/useAuth";

interface LayoutProps {
  children: ReactNode;
  pageTitle?: string;
  pageDescription?: string;
}

const defaultTitle = "Repro";
const defaultDescription = "Repro";

export const Layout = ({
  children,
  pageTitle,
  pageDescription
}: LayoutProps) => {
  const { session } = useAuth({
    required: true
  });

  return (
    <>
      <Head>
        <title>{pageTitle || defaultTitle}</title>
        <meta
          name="description"
          content={pageDescription || defaultDescription}
        />
      </Head>
      <div className="relative flex h-screen w-screen flex-col">
        <Header />
        <main
          className="flex flex-1 flex-col child:flex-1 "
          data-test-id="main">
          {!session && <LoadingSpinner />}
          {session && children}
        </main>
      </div>
    </>
  );
};
