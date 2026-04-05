import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Gyubeen's Portfolio",
  description: "Gyubeen's Portfolio",
  icons: {
    apple: `${basePath}/apple-touch-icon.png`,
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
        <div className="flex min-h-screen flex-col">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
