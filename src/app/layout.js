import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://domain-kamu.com"),
  title: "Sinar Acrylic Tegal | Laser Cutting, Huruf Timbul & Akrilik Custom",
  description:
    "Sinar Acrylic Tegal melayani jasa laser cutting, huruf timbul, signage, plakat, box mahar, neon box, dan produk akrilik custom dengan hasil presisi dan profesional.",
  keywords: [
    "akrilik tegal",
    "laser cutting tegal",
    "huruf timbul tegal",
    "plakat akrilik tegal",
    "box mahar tegal",
    "neon box tegal",
    "signage tegal",
    "jasa akrilik tegal",
    "sinar acrylic tegal",
    "pt ade sinar lestari",
  ],
  alternates: {
    canonical: "https://domain-kamu.com",
  },
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Sinar Acrylic Tegal | Laser Cutting & Produk Akrilik Custom",
    description:
      "Spesialis jasa akrilik dan laser cutting terpercaya di Tegal.",
    url: "https://domain-kamu.com",
    siteName: "Sinar Acrylic",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sinar Acrylic Tegal",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}