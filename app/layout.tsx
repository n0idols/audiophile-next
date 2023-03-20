import { League_Spartan, Roboto_Mono, Manrope } from "next/font/google";
import Providers from "@/components/Providers";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const man = Manrope({
  variable: "--font-man",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${man.variable}`}>
      <body>
        <Providers>
          <Navbar />
          <div className="min-h-screen">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
