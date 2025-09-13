import type { Metadata } from "next";
import Providers from "../providers";
import { Header } from "@/components/Header";
import { locales } from "@/i18n/locales";

// TODO: добавить Footer после переноса
export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}

export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale: locale.code,
  }));
}
