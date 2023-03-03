import React, { ReactElement } from "react";

import { useStore } from "effector-react";
import { Layout } from "~components/shared/Layout/Layout";

import { NextPageWithLayout } from "../../../pages/_app";
import { $comments } from "./model";

export const HomePage: NextPageWithLayout = () => {
  const comments = useStore($comments);
  return (
    <div className="flex">
      <pre>{JSON.stringify(comments, undefined, 2)}</pre>
    </div>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout pageTitle="Repro">{page}</Layout>;
};
