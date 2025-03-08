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
  title: "hi",
  description: "",
  openGraph: {
    title: "hi",
    description: "",
    url: "https://www.toolzo.online",
    siteName: "Toolzo",
    images: [
      {
        url: "/vercel1.PNG",
        width: 800,
        height: 600,
        alt: "Preview Image",
      },
    ],
    type: "website",
  },
};

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
