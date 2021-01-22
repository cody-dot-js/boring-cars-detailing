import { TopNavigation } from "./TopNavigation";
import { Footer } from "./footer/Footer";

export interface LayoutMeta {
  copyrightDate: string;
}

interface Props {
  children: React.ReactNode;
  meta: LayoutMeta;
}

export function Layout({ children, meta }: Props) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-branded">
      <TopNavigation />
      <main className="flex-auto">{children}</main>
      <Footer copyrightDate={meta.copyrightDate} className="flex-shrink-0" />
    </div>
  );
}
