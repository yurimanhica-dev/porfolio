import CustomCursor from "@/components/CustomCursor";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./sections/Header";

export const metadata: Metadata = {
  title: {
    default: "Yuri Manhiça | Software Developer",
    template: "%s | Yuri Manhiça",
  },
  description:
    "Portfólio de Yuri Manhiça, Desenvolvedor Full Stack especializado em .NET, C#, SQL Server, Blazor e React. Experiência em sistemas empresariais, automação e soluções personalizadas.",
  keywords: [
    "Yuri Manhiça",
    "Desenvolvedor Full Stack",
    "Programador Moçambique",
    ".NET",
    "C#",
    "React",
    "Next.js",
    "Blazor",
    "SQL Server",
    "Desenvolvimento Web",
    "Sistemas de Gestão",
    "Automação",
  ],
  authors: [
    { name: "Yuri Carlito Manhiça", url: "https://yurimanhica.vercel.app" },
  ],
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='50%' x='50%' dominant-baseline='middle' text-anchor='middle' font-size='50' font-family='sans-serif'>YM</text></svg>",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Yuri Manhiça | Software Developer",
    description:
      "Portfólio profissional de Yuri Manhiça — especialista em desenvolvimento de sistemas empresariais, automação de relatórios e soluções .NET personalizadas.",
    url: "https://yurimanhica.vercel.app",
    siteName: "Yuri Manhiça",
    locale: "pt_MZ",
    type: "website",
    images: [
      {
        url: "/soapUi.png",
        width: 1200,
        height: 630,
        alt: "Portfólio de Yuri Manhiça - Desenvolvedor Full Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuri Manhiça | Desenvolvedor Full Stack",
    description:
      "Portfólio de Yuri Manhiça, especialista em .NET, React, SQL Server e Blazor. Soluções de software com foco em desempenho e inovação.",
    images: ["/soapUi.png"],
    creator: "@yurimanhica",
  },
  metadataBase: new URL("https://yurimanhica.vercel.app"),
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
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
