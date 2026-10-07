import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import { SignupModalProvider } from "@/components/providers/SignupModalProvider";
import TopStrip from "@/components/layout/TopStrip";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageLoader from "@/components/layout/PageLoader";
import { SITE } from "@/data/site";
import "@/styles/main.scss";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sora.variable} ${manrope.variable}`}>
      <body>
        <noscript>
          <style>{".page-loader{display:none}"}</style>
        </noscript>
        <PageLoader />
        <SignupModalProvider>
          <div className="page" id="top">
            <TopStrip />
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </SignupModalProvider>
      </body>
    </html>
  );
}
