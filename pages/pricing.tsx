import * as React from "react";
import { getPageLayout } from "components/Layout";
import { GetStaticProps } from "next";
import { Pricing } from "components/Pricing";
import type { BasePageProps } from "types/BasePageProps";
import { pageMeta, PageMeta } from "utils/pageMeta";
import { shortName } from "config";

interface Props extends BasePageProps {
  meta: PageMeta;
}

export const getStaticProps: GetStaticProps = async () => {
  const props: Props = {
    meta: pageMeta(),
    seo: {
      title: "Pricing",
      description: `${shortName} Services Pricing`,
    },
  };

  return {
    props,
  };
};

PricingPage.pageLayout = getPageLayout;

export default function PricingPage({ meta }: Props) {
  return (
    <>
      <Pricing />
    </>
  );
}
