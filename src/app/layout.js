
import {
  Geist,
  Geist_Mono,
  Noto_Sans_Bengali,
} from "next/font/google";

import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const banglaFont = Noto_Sans_Bengali({
  subsets: ["bengali"],
  variable: "--font-bangla",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="bn"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} ${banglaFont.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">{children}</main>

        <Footer />

        <ToastContainer />
      </body>
    </html>
  );
}