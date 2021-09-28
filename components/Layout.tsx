import { SkipNavLink, SkipNavContent } from "@reach/skip-nav";
import { TopNavigation } from "./TopNavigation";
import { Footer } from "./footer/Footer";
import { SEO } from "./SEO";
import "@reach/skip-nav/styles.css";
import styles from "./layout.module.css";
import { GetPageLayout } from "types/PageLayout";
import { BasePageProps } from "types/BasePageProps";

interface Props extends BasePageProps {
  children: React.ReactNode;
}

export function Layout({ children, seo }: Props) {
  return (
    <>
      <SEO {...seo} />
      <SkipNavLink className={styles.skipNav} />
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-branded">
        <TopNavigation />
        <SkipNavContent className="flex-auto">
          <main>{children}</main>
        </SkipNavContent>
        <Footer className="flex-shrink-0" />
      </div>
    </>
  );
}

// eslint-disable-next-line react/display-name
export const getPageLayout: GetPageLayout = (layoutProps) => (page) =>
  <Layout {...layoutProps}>{page}</Layout>;
