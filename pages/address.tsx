import * as React from "react";
import { getPageLayout } from "components/Layout";
import { shortName } from "config";
import { GetStaticProps } from "next";
import { pageMeta, PageMeta } from "utils/pageMeta";
import type { BasePageProps } from "types/BasePageProps";
import { Page } from "types/PageLayout";
import { useAutosuggestAddress } from "apis/here";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
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

const Address: Page = () => {
  const [search, setSearch] = React.useState("");
  const { data, isLoading, error } = useAutosuggestAddress(search);

  console.log({ data, error });

  return (
    <>
      <section className="mx-auto py-16 sm:py-24 px-4 max-w-7xl sm:px-6 lg:px-8">
        {/* <input
          type="text"
          className="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pink-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {isLoading && <>Loading<Ellipsis /></>}
        {data && (<ul className="mt-8">
          {data.map((i) => (
            <li key={i.id}>
              <div>
                {i.title}
              </div>
              <div>
                {i.address?.label}
              </div>
            </li>
          ))}
        </ul>)}
        {error} */}
        <Combobox aria-label="Cities" onSelect={v => console.log("selected", v)}>
          <ComboboxInput
            className="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pink-500"
            onChange={(e) => setSearch(e.target.value)}
          />
          {data && (
            <ComboboxPopover className="text-gray-900">
              {data.length > 0 ? (
                <ComboboxList>
                  {data.map((item) => {
                    // const str = `${city.city}, ${city.state}`;
                    const str = item.address.label;
                    return <ComboboxOption key={str} value={str} />;
                  })}
                </ComboboxList>
              ) : (
                <span style={{ display: "block", margin: 8 }}>
                  No results found
                </span>
              )}
            </ComboboxPopover>
          )}
        </Combobox>
      </section>
    </>
  );
};

Address.pageLayout = getPageLayout;

export default Address;
