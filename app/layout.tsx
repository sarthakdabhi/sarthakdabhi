import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sarthakdabhi.com"),
  title: "Sarthak Dabhi — Staff Software Engineer",
  description:
    "Staff Software Engineer at Tebra. 12+ years building product end‑to‑end across web, cloud, and team leadership.",
  openGraph: {
    title: "Sarthak Dabhi — Staff Software Engineer",
    description:
      "Architecting systems, leading teams, shipping product. Currently at Tebra.",
    url: "https://www.sarthakdabhi.com",
    siteName: "Sarthak Dabhi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@sarthakdabhi",
    title: "Sarthak Dabhi — Staff Software Engineer",
    description: "Architecting systems, leading teams, shipping product.",
  },
  icons: {
    icon: "/favicon.svg",
  },
  verification: {
    other: {
      "plug-widgets-site-verification": "b305a57e-df81-406e-80f8-f16f9e2f83fa",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
        <Script
          src="https://cdn.plugwidgets.com/widget.js"
          data-token="90b2902b-9829-4147-bbc9-903a57613de0"
          async
        />
      </body>
    </html>
  );
}
