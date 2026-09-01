import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SmoothScroll from "../components/ui/SmoothScroll";
import PageWrapper from "../components/PageWrapper";

// Configure typography using Next.js font optimization
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-geist-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "UniTech | Custom Software, Web & Mobile Products",
  description: "UniTech engineers custom software, web platforms, and mobile apps for growing businesses. High-craft development with senior developers.",
  metadataBase: new URL("https://unitech.dev"),
  keywords: ["Software Development", "Custom Software", "Next.js Development", "Mobile Apps", "Cloud Infrastructure", "DevOps", "Fintech", "Healthcare"],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "UniTech | Custom Software, Web & Mobile Products",
    description: "UniTech engineers custom software, web platforms, and mobile apps for growing businesses. High-craft development with senior developers.",
    url: "https://unitech.dev",
    siteName: "UniTech",
    images: [
      {
        url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "UniTech Engineering Workspace",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UniTech | Custom Software, Web & Mobile Products",
    description: "UniTech engineers custom software, web platforms, and mobile apps for growing businesses. High-craft development with senior developers.",
    images: ["https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop"],
  },
  other: {
    "theme-color": "#FFFFFF",
    "color-scheme": "light",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="antialiased selection:bg-accent selection:text-white bg-background" suppressHydrationWarning>

        {/* Smooth scroll wrapper utilizing Lenis */}
        <SmoothScroll>
          {/* Sticky global navigation bar */}
          <Header />
          
          {/* Main content viewport with dynamic padding */}
          <PageWrapper>{children}</PageWrapper>
          
          {/* Shared IT site footer */}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
