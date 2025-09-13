import type { Metadata } from "next";
import "./globals.css";
// NOTE: metadata export is required by Next.js (fast refresh warning is safe to ignore here)
import Providers from "./providers";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
