import Home from "@/components/Home";
import { localeCodes } from "@/i18n/locales";

export async function generateStaticParams() {
  return localeCodes.map((locale) => ({ locale }));
}


export default function HomePage() {
  return <Home />;
}
