import type { Metadata } from "next";
import { EB_Garamond, Cormorant, Overpass_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/apps/shared/Header";
import Navbar from "@/apps/shared/Navbar";
import { cn } from "@/lib/utils";
import Footer from "@/apps/shared/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const garamond = EB_Garamond({
  variable: "--font-garamond",
  style: "italic",
});

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: "400",
});

const overpassMono = Overpass_Mono({
  variable: "--font-overpass-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AMOR | Leather Goodness",
  description: "Leather Goodness",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        garamond.variable,
        cormorant.variable,
        overpassMono.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <div className="sticky top-0 z-70 sm:relative w-full bg-white  flex justify-center items-center">
          <Header />
        </div>
        <div className="sticky top-0 z-70 w-full bg-white  flex justify-center items-center">
          <Navbar />
        </div>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
