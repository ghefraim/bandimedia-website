import type { Metadata } from "next";
import { Poppins, Kalam } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["700", "800"], // Bold (700) și Extra Bold (800)
  display: "swap",
});

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
        className={`${poppins.variable} ${kalam.variable} antialiased text-gray-900 text-base font-bold bg-gray-900 min-h-full font-poppins`}
      >
        <div className="box-border">
          <Header />
          <main className="box-border">
            {children}
          </main>
          <div className="box-border pt-8 " style={{ borderTop: '4px solid var(--brand-yellow)' }}>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
