import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Kinsmen Redi-Mix | Mobile Ready-Mix Concrete in Alberta",
  description:
    "Kinsmen Redi-Mix is a mobile ready-mix concrete supplier serving Calgary and communities across Alberta, with Churchill, Manitoba as a future development.",
  icons: { icon: "/logo.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body>{children}</body>
    </html>
  );
}
