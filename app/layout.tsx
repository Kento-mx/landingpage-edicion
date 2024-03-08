import type { Metadata } from "next";
import { Inder } from "next/font/google";
import "./globals.css";

const inder = Inder({subsets: ["latin"], weight:["400"]});


export const metadata: Metadata = {
  title: "Ediciones | Kento",
  description: "Informacion y contacto para solicitar ediciones de videos para tu canal de YT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inder.className}>{children}</body>
    </html>
  );
}
