import { SkipNavLink, SkipNavContent } from "@reach/skip-nav";
import { TopNavigation } from "./TopNavigation";
import { Footer } from "./footer/Footer";
import { Analytics } from "./Analytics";
import { SEO, SEOProps } from "./SEO";
import "@reach/skip-nav/styles.css";
import styles from "./layout.module.css";
import { EnvProvider } from "hooks/useEnv";
import { PageMeta } from "utils/pageMeta";

interface Props extends SEOProps {
  children: React.ReactNode;
  pageMeta: PageMeta;
}

export function Layout({
  children,
  pageMeta,
  title,
  description,
  robots,
}: Props) {
  return (
    <EnvProvider env={pageMeta.env}>
      <SEO title={title} description={description} robots={robots} />
      <Analytics />
      <SkipNavLink className={styles.skipNav} />
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-branded">
        <TopNavigation />
        <SkipNavContent className="flex-auto">
          <main>{children}</main>
        </SkipNavContent>
        <Footer
          copyrightDate={pageMeta.copyrightDate}
          className="flex-shrink-0"
        />
      </div>
    </EnvProvider>
  );
}
