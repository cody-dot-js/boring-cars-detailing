import * as React from "react";
import { getPageLayout } from "components/Layout";
import { GetStaticProps } from "next";
import { pageMeta, PageMeta } from "utils/pageMeta";
import { shortName } from "config";
import type { BasePageProps } from "types/BasePageProps";
import { Page } from "types/PageLayout";
import { PricingSection } from "components/Pricing";

interface Props extends BasePageProps {
  meta: PageMeta;
}

export const getStaticProps: GetStaticProps = async () => {
  const props: Props = {
    meta: pageMeta(),
    seo: {
      title: "Pricing",
      description: `${shortName} appointment pricing`,
    },
  };

  return {
    props,
  };
};

const Pricing: Page = () => {
  return <PricingSection />;
};

Pricing.pageLayout = getPageLayout;

export default Pricing;
