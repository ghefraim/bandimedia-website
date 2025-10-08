import type { Metadata } from "next";
import { Kalam } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";

const kalam = Kalam({
  variable: "--font-handwritten",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bandi Media - spunem povești care nu pot fi trecute cu vederea",
  description: "Suntem echipa care transformă ideile în campanii care se fac văzute, auzite și simțite. Creăm conținut care stârnește reacții, gestionăm conturi de social media care cresc comunități și punem brandurile în lumina pe care o merită. Fiecare postare e o poveste, iar fiecare poveste îți aduce publicul mai aproape.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kalam.variable} antialiased text-gray-900 text-base font-semibold bg-gray-900 min-h-full font-helvetica`}
      >
        <div className="box-border">
          <main className="box-border">
            {children}
          </main>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
