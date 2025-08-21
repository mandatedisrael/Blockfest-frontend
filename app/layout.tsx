import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import { Toaster } from "@/components/ui/sonner";


export const metadata: Metadata = {
  title: "BlockFest",
  description: "A festival of blockchain and web3 innovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased w-full mx-auto [@media(min-width:1920px)]:max-w-[1440px]"
      >
        <Navbar/>
        {children}
        <Footer />
        <Toaster/>
      </body>
    </html>
  );
}
