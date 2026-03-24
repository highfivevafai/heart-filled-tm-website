import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import { siteConfig } from "@/lib/siteConfig";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: "%s | Heart Filled Toastmasters",
  },
  description:
    "Heart Filled Toastmasters is a Woodland Hills, CA club helping members improve public speaking, confidence, and leadership skills.",
  metadataBase: new URL(siteConfig.baseUrl),
  keywords: [
    "Public Speaking Woodland Hills",
    "Leadership Training San Fernando Valley",
    "Toastmasters near me",
  ],
  openGraph: {
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "/",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.baseUrl,
  email: siteConfig.email,
  sameAs: [siteConfig.socialProfiles.facebook, siteConfig.socialProfiles.meetup],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${montserrat.variable} min-h-screen antialiased`}
      >
        <AnnouncementBanner />
        <Navbar />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
