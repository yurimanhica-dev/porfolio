import CustomCursor from "@/components/CustomCursor";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./sections/Header";

export const metadata: Metadata = {
  title: "Yuri Manhiça",
  description: "ssss",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='50%' x='50%' dominant-baseline='middle' text-anchor='middle' font-size='50' font-family='sans-serif'>YM</text></svg>",
  },
};

export const be_logo = localFont({
  src: "fonts/Taskor.ttf",
  variable: "--font-taskor",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${be_logo.className} antialiased dark`}
        style={{ overflowX: "hidden" }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
