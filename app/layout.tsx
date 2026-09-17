import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const assetPath = (path: string) => `${basePath}${path}`;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const publicAssetUrl = (path: string) => new URL(assetPath(path), siteUrl).toString();

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Tabere Methodist Junior High School",
  description:
    "Official website for Tabere Methodist Junior High School in the Atwima Nwabiagya North District, Ashanti Region, Ghana.",
  openGraph: {
    title: "Tabere Methodist Junior High School",
    description: "Nurturing excellence, faith, and service in Ashanti Region.",
    images: [
      {
        url: publicAssetUrl("/og.png"),
        width: 1792,
        height: 1024,
        alt: "Tabere Methodist Junior High School social preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tabere Methodist Junior High School",
    description: "Nurturing excellence, faith, and service in Ashanti Region.",
    images: [publicAssetUrl("/og.png")],
  },
  icons: {
    icon: assetPath("/tabere-crest.png"),
    shortcut: assetPath("/tabere-crest.png"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
