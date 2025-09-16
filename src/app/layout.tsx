import type { Metadata } from "next";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mi sitio web",
  description: "Prismic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <main>
        <Navbar/>
        {children}
        </main>
         <Footer/>
      </body>
     
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
