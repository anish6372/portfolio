import { Inter, Oswald } from "next/font/google";
import { SITE_CONFIG } from "@/data/constants";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata = {
  title: `${SITE_CONFIG.name} — ${SITE_CONFIG.role}`,
  description: SITE_CONFIG.description,
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  openGraph: {
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.role}`,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.siteUrl,
    siteName: SITE_CONFIG.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.role}`,
    description: SITE_CONFIG.description,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${oswald.variable} font-sans antialiased bg-white text-zinc-900`}>
        {children}
      </body>
    </html>
  );
}
