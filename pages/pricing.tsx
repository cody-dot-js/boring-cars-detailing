import * as React from "react";
import { Layout, LayoutMeta } from "components/Layout";
import { GetStaticProps } from "next";
import { copyrightDate } from "utils/copyrightDate";
import { Pricing } from "components/Pricing";

interface Props {
  meta: LayoutMeta;
}

export const getStaticProps: GetStaticProps = async () => {
  const props: Props = {
    meta: {
      copyrightDate: copyrightDate(),
    },
  };

  return {
    props,
  };
};

export default function Home({ meta }: Props) {
  return (
    <Layout meta={meta}>
      <Pricing />
    </Layout>
  );
}
