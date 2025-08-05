import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import SplashProvider from "@/components/SplashProvider";
import Analytics from "./analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shyamsunder Tard's Portfolio",
  description: "Modern & Minimalist Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/logos/logo_dark.png"
          media="(prefers-color-scheme: light)"
        />

        <link
          rel="icon"
          href="/logos/logo_light.png"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body className={inter.className}>
        <Analytics />
        <SplashProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </SplashProvider>
      </body>
    </html>
  );
}
