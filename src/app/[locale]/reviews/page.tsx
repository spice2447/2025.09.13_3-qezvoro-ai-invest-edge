import ReviewsPageContent from "@/components/reviews/ReviewsPageContent";
import { getMessages } from "@/i18n";
import { localeCodes } from "@/i18n/locales";

export async function generateStaticParams() {
	return localeCodes.map((locale) => ({ locale }));
}

export default async function ReviewsPage(props: { params: Promise<{ locale: string }> }) {
	const { locale } = await props.params;
	const t = await getMessages(locale);

  return <ReviewsPageContent t={t} locale={locale} />;
}
