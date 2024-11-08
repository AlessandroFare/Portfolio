import type { Metadata } from "next";
import { GeistSans, GeistMono } from "@/config/fonts";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import { generateMetadata as getMetadata } from "@/hooks/useMetadata";

export function generateMetadata(): Metadata {
  return getMetadata();
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
