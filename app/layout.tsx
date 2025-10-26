import type { Metadata } from "next";
import "./globals.css";
import { JetBrains_Mono, Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Portafolio de Sofía Luna",
  description:
    "Experiencia futurista en diseño y desarrollo digital: portafolio único de Sofía Luna, líder en productos con enfoque en impacto humano.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Portafolio de Sofía Luna",
    description:
      "Experiencia futurista en diseño y desarrollo digital: portafolio único de Sofía Luna, líder en productos con enfoque en impacto humano.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Portafolio de Sofía Luna",
    description:
      "Experiencia futurista en diseño y desarrollo digital: portafolio único de Sofía Luna, líder en productos con enfoque en impacto humano."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${jetBrainsMono.variable}`}>
      <body>
        <div className="grid-background" />
        {children}
      </body>
    </html>
  );
}
