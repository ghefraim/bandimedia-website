import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Komodo Media - Global Social & Influencer Marketing Agency",
  description: "We drive measurable results with data-driven, tech-powered campaigns to boost awareness, and skyrocket engagement for the world's leading brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-gray-900 text-base font-normal bg-gray-900 min-h-full font-impact`}
      >
        <div className="box-border">
          <Header />
          <main className="box-border">
            {children}
          </main>
          <div className="box-border pt-8 md:pt-20" style={{ borderTop: '4px solid var(--brand-yellow)' }}>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
