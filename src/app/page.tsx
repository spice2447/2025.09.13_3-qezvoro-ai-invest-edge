import { redirect } from "next/navigation";
// TODO: заменить на actual defaultLocale после добавления i18n
const defaultLocale = "en";
export default function RootIndex() {
  redirect(`/${defaultLocale}`);
}
