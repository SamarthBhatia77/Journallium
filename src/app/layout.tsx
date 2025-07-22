import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { JournalProvider } from '@/context/JournalContext'
import Navbar from "./components/navbar";
import Footer from "./components/footer";
export const metadata: Metadata = {
  title: "Journallium",
  description: "Journallium is a daily journal web app which lets users seamlessly journal their thoughts word by word",
};
import Head from "next/head";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="flex-grow">
        <div className="flex flex-col min-h-screen">
        <Navbar/>
        <JournalProvider>
          {children}
        </JournalProvider>
        
        </div>
        <Footer/>
      </body>
    </html>
  );
}
