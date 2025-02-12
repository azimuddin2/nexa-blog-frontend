import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NexaBlog",
  description:
    "Welcome to NexaBlog – where innovation meets imagination in the dynamic realm of technology, offering a thrilling journey through the latest trends and groundbreaking discoveries in the world of tech!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${roboto.className} antialiased max-w-7xl mx-auto`}
      >
        <Header />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
