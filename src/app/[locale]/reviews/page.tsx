import { ReviewsPageContent } from "@/components/reviews/ReviewsPageContent";
import { localeCodes } from "@/i18n/locales";

export async function generateStaticParams() {
	return localeCodes.map((locale) => ({ locale }));
}

export default function ReviewsPage() {
  return <ReviewsPageContent />;
}
