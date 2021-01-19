import * as React from "react";
import Head from "next/head";
import { Header } from "./Header";
import { SettingsIcon } from "./icons/SettingsIcon";
import { Footer } from "./Footer";
import { Drawer } from "./Drawer";

export interface LayoutMeta {
  copyrightDate: string;
}

interface Props {
  children: React.ReactNode;
  initialSearchValue?: string;
  onSearch?: (searchValue: string) => void;
  onSearchChange?: (searchValue: string) => void;
  meta: LayoutMeta;
}

export function Layout({ children, meta }: Props) {
  const [isSettingsOpen, setIsSettingsOpen] = React.useState<boolean>(false);

  return (
    <>
      <Head>
        <title>App Template</title>
        <link rel="icon" href="/favicon.ico" key="favicon" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <meta property="og:title" content="ShotSearch" key="title" />
        {/* <link
          rel="stylesheet"
          href="https://rsms.me/inter/inter.css"
          key="inter"
        /> */}
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header>
          <SettingsButton onClick={() => setIsSettingsOpen(true)} />
        </Header>
        \
        <Drawer
          title="Example Drawer"
          isOpen={isSettingsOpen}
          onClose={() => setIsSettingsOpen(false)}
        >
          <aside className="prose">
            <h4>Example Drawer Content</h4>
            <p>Dolor anim tempor esse cupidatat incididunt nisi sit do.</p>
          </aside>
        </Drawer>
        <main className="flex-auto max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer copyrightDate={meta.copyrightDate} className="flex-shrink-0" />
      </div>
    </>
  );
}

const SettingsButton = ({ onClick }: { onClick?: () => void }) => (
  <button
    type="button"
    aria-label="Open Settings"
    data-microtip-position="bottom-left"
    role="tooltip"
    onClick={onClick}
    className="text-2xl font-medium rounded-md text-gray-300 hover:text-gray-50 focus:text-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-50"
  >
    <SettingsIcon />
  </button>
);
