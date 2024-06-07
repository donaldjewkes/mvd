import type { Metadata } from "next";
import { EB_Garamond, IBM_Plex_Mono, Inter, DM_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const gara = EB_Garamond({ subsets: ["latin"], variable: "--font-gara" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dm = Inter({ subsets: ["latin"], variable: "--font-dm" });
const ibm = IBM_Plex_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-ibm",
});

export const metadata: Metadata = {
  title: "mvd",
  description: "minimum viable demos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Minimum Viable Demos</title>
        {/* <link rel="stylesheet" href="styles.css" /> */}

        <link rel="icon" href="favicon.ico" />

        <meta name="title" content="Minimum Viable Demos" />
        <meta
          name="description"
          content="An evening showcase of ambitious projects exploring technology, art, and science."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mvdemos.com/" />
        <meta property="og:title" content="Minimum Viable Demos" />
        <meta
          property="og:description"
          content="An evening showcase of ambitious projects exploring technology, art, and science."
        />

        <meta name="twitter:url" content="https://mvdemos.com/" />
        <meta name="twitter:title" content="Minimum Viable Demos" />
        <meta
          name="twitter:description"
          content="An evening showcase of ambitious projects exploring technology, art, and science."
        />
      </head>
      <body
        className={`bg-white ${gara.variable} ${inter.variable} ${ibm.variable} ${dm.variable}`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
