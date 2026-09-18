import type { Metadata } from "next";
import { Sanchez, Cormorant, Overpass_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

const sanchez = Sanchez({
  variable: "--font-sanchez",
  subsets: ["latin"],
  weight: "400",
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
      className={`${sanchez.variable} ${cormorant.variable} ${overpassMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {" "}
        <div className="sticky top-0 z-70 sm:relative w-full bg-white  flex justify-center items-center">
          <Header />
        </div>
        <div className="sticky top-0 z-70 w-full bg-white  flex justify-center items-center">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
