import ContactPageContent from "@/components/contact/ContactPageContent";
import { localeCodes } from "@/i18n/locales";

export async function generateStaticParams() {
	return localeCodes.map((locale) => ({ locale }));
}

export default function ContactPage() {
  return <ContactPageContent />;
}
