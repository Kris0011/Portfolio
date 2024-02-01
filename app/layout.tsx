import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import "@upstash/claps/style.css";

import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

const title = "Kris Patel";
const description = "Student and developer";
const url = "https://krispatel.live";
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
  themeColor: "#d5d5d7",
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
      <head >
        <body className={inter.className} >
          <main className="md:px-10">
            <Header />
            {children}
          </main>
          <Analytics />
        </body>
      </head>
    </html>
  );
}