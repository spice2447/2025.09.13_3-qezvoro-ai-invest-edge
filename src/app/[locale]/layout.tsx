import type { Metadata } from "next";
import React from "react";
import Providers from "../providers";
import { Header } from "@/components/Header";
import { locales } from "@/i18n/locales";
import { Footer } from "@/components/Footer";

interface LocaleLayoutProps {
	children: React.ReactNode;
	params: Promise<{ locale: string }>
}

export default async function LocaleLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;

	return (
		<div>
			<Header locale={locale} />
			<main>{children}</main>
			<Footer locale={locale} />
		</div>
	);
}
