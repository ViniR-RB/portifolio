import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Dev Vini",
  description: "Em busca da senioridade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="light">
      <body
        className={`${inter.variable} bg-background-light dark:bg-background-dark text-[#101622] dark:text-[#f6f6f8] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
