import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Tabere Methodist Junior High School",
  description:
    "Official website for Tabere Methodist Junior High School in the Atwima Nwabiagya North District, Ashanti Region, Ghana.",
  openGraph: {
    title: "Tabere Methodist Junior High School",
    description: "Nurturing excellence, faith, and service in Ashanti Region.",
    images: [
      {
        url: "/og.png",
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
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
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
