import type { Metadata } from "next";
import { Syne, Inter, DM_Mono } from "next/font/google";
import AgentationWrapper from "@/components/AgentationWrapper";
import "./globals.css";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://learning.codivacore.online"),
  title: "CodivaCore Learning — Development, Photoshoot & Modelling Training",
  description:
    "Offline & online training in Development, Brand Photoshoot, and Modelling. Expert-led courses that launch real careers.",
  icons: {
    icon: "/codivacode-logo.png",
    shortcut: "/codivacode-logo.png",
    apple: "/codivacode-logo.png",
  },
  openGraph: {
    title: "CodivaCore Learning",
    description:
      "Offline & online training in Development, Brand Photoshoot, and Modelling. Expert-led courses that launch real careers.",
    url: "https://learningcodivacore.vercel.app",
    siteName: "CodivaCore Learning",
    images: [
      {
        url: "/codivacode-logo.png",
        width: 512,
        height: 512,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodivaCore Learning",
    description:
      "Offline & online training in Development, Brand Photoshoot, and Modelling.",
    images: ["/codivacode-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${inter.variable} ${dmMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-surface text-white font-body">
        {children}
        <AgentationWrapper />
      </body>
    </html>
  );
}
