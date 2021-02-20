import * as React from "react";
import { getPageLayout } from "components/Layout";
import { shortName } from "config";
import { GetStaticProps } from "next";
import { pageMeta, PageMeta } from "utils/pageMeta";
import type { BasePageProps } from "types/BasePageProps";
import { Page } from "types/PageLayout";
import { autosuggestAddress } from "apis/here";
import { QueryClient, useQuery } from "react-query";

interface Props extends BasePageProps {
  meta: PageMeta;
}

export const getStaticProps: GetStaticProps = async () => {
  const props: Props = {
    meta: pageMeta(),
    seo: {
      title: "Address Test",
      description: `Address Test ${shortName}`,
    },
  };

  return {
    props,
  };
};

const About: Page = () => {
  const [q, setQ] = React.useState("");

  React.useEffect(() => {
    const foo = async () => {
      const res = await await autosuggestAddress({ q });
      console.log(res);
    };

    if (q) {
      foo();
    }
  }, [q]);

  return (
    <>
      <section className="mx-auto py-16 sm:py-24 px-4 max-w-7xl sm:px-6 lg:px-8">
        <input
          type="text"
          className="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pink-500"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </section>
    </>
  );
};

About.pageLayout = getPageLayout;

export default About;
