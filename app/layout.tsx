import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Advanced Technology Solutions | Project Management",
  description: `We provide project management, engineering design, site auditing, specialized industrial solutions, packaging automation, and compliance excellence across the MENA Region.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Toaster />
          {children}
      </body>
    </html>
  );
}
