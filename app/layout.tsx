import { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import "@upstash/claps/style.css";

import Header from "@/components/Header";
import ThemeProvider from "@/components/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });
const robotoMono = Roboto_Mono({ subsets: ["latin"] });

const title = "Kris Patel";
const description = "A Human Being who loves to enjoy life.";
const url = "https://krispatel.me";
const locale = "tr-TR";

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description: description,
  openGraph: {
    title,
    description,
    url,
    siteName: title,
    locale,
    type: "website",
    images: [
      {
        url: "/krispatel.jpeg",
        alt: "Kris Patel",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: title,
    description,
    site: "@kris__patel",
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#1c1c1c",
  icons: {
    icon: "/krispatel.jpeg",
    apple: "/krispatel.jpeg",
  },
  manifest: `/manifest.json`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider attribute="class" defaultTheme="light">
        <head>
          <body className={robotoMono.className}>
            <main className="md:px-10">
              <Header />
              {children}
            </main>
            <Analytics />
          </body>
        </head>
      </ThemeProvider>
    </html>
  );
}
