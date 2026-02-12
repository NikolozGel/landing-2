import { NextIntlClientProvider } from "next-intl";
import "@/app/[locale]//(main)/globals.css";

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale}>
        <body>{children}</body>
      </NextIntlClientProvider>
    </html>
  );
}
