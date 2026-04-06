import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Creative Portfolio | Full-Stack Engineer",
  description: "A showcase of exceptional digital experiences and modern web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} antialiased dark`} style={{ scrollBehavior: 'smooth' }}>
      <body className="min-h-screen flex flex-col bg-background text-foreground selection:bg-accent/30 selection:text-white">
        <main className="flex-grow flex flex-col relative z-0">{children}</main>
      </body>
    </html>
  );
}
