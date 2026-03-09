import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import FeedbackModal from "@/components/FeedbackModal";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Heart Filled Toastmasters",
  description: "Heart Filled Toastmasters is a Woodland Hills, CA club helping members improve public speaking, confidence, and leadership skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} min-h-screen antialiased`}
      >
        <AnnouncementBanner />
        <Navbar />
        {children}
        <Footer />
        <FeedbackModal />
      </body>
    </html>
  );
}
