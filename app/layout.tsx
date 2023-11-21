import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Footer from "@/components/Footer";
import { Providers } from "@/redux/provider";
import { Toaster } from "@/components/ui/toaster";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "O8 TYRES",
  description: "Powered by DBS Tyres",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Providers>
          <section className="flex flex-col h-[100svh] justify-between ">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </section>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
