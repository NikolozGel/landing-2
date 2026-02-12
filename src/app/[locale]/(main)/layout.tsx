import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import CompanyInfoSRV from "@/components/companyInfoSRV/CompanyInfoSRV";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { routing } from "@/i18n/routing";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
  title: "Crypto Landing",
  description: "Premium crypto landing page",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    return notFound();
  }
  return (
    <html lang="en">
      <body className={`${geistSans.variable}  ${geistMono.variable}`}>
        <CompanyInfoSRV />
        <NextIntlClientProvider locale={locale}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
