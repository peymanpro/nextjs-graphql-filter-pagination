import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Product Store - GraphQL Demo",
  description: "GraphQL Filtering & Pagination Demo with Next.js and NestJS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>

        <Toaster
          position="top-right"
          richColors
          closeButton
          expand
          duration={3500}
          visibleToasts={3}
        />
      </body>
    </html>
  );
}
