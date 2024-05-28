// 'use client'

import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import { Inter } from "next/font/google";
// import type { Metadata } from "next";
import { headers } from "next/headers";

import Providers from "./providers";
import Link from "next/link";
import { Toaster } from "react-hot-toast";
import CreateGameModal from "@/components/CreateGameModal";

// export const metadata: Metadata = {
//   title: "GreedyPIg",
//   description: "",
// };

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookie = headers().get("cookie");

  return (
    <html lang="en">
      <body className={inter.className}>
        <Link href="/games">GAmes</Link>
        <Providers>
          {children}
          <CreateGameModal />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
