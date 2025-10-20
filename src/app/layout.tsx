import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: "Stellar Voice Agents",
  description: "AI voice agents that engage, qualify, and book appointments 24/7 — for Real Estate, Health, and Finance.",
};

const proximaNova = localFont({
  src: [
    {
      path: './fonts/Proxima Nova/proximanova_regular.ttf',
      weight: '400',
    },
    {
      path: './fonts/Proxima Nova/proximanova_bold.otf',
      weight: '600',
    },
    {
      path: './fonts/Proxima Nova/proximanova_extrabold.otf',
      weight: '800',
    },
    {
      path: './fonts/Proxima Nova/proximanova_black.otf',
      weight: '900',
    },
  ],
  variable: '--font-proxima',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-proxima antialiased h-100vw bg-no-repeat w-full ${proximaNova.className}`}
        style={{
          backgroundImage: "url('/background.png')",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
        }}
      >
        {children}
      </body>
    </html>
  );
}
