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
  title: "CodivaCore Learning — Development, Photoshoot & Modelling Training",
  description:
    "Offline & online training in Development, Brand Photoshoot, and Modelling. Expert-led courses that launch real careers.",
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
