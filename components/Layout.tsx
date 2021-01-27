import { SkipNavLink, SkipNavContent } from "@reach/skip-nav";
import { TopNavigation } from "./TopNavigation";
import { Footer } from "./footer/Footer";
import { SEO, SEOProps } from "./SEO";
import "@reach/skip-nav/styles.css";
import styles from "./layout.module.css";
export interface LayoutMeta {
  copyrightDate: string;
}

interface Props extends SEOProps {
  children: React.ReactNode;
  meta: LayoutMeta;
}

export function Layout({ children, meta, title, description, robots }: Props) {
  return (
    <>
      <SEO title={title} description={description} robots={robots} />
      <SkipNavLink className={styles.skipNav} />
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-branded">
        <TopNavigation />
        <SkipNavContent className="flex-auto">
          <main>{children}</main>
        </SkipNavContent>
        <Footer copyrightDate={meta.copyrightDate} className="flex-shrink-0" />
      </div>
    </>
  );
}
