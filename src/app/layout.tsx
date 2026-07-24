/**
 * Layout principal de l'application
 * Architecture et structure globale du portfolio
 * 
 * @author Rayane Laidi
 * @version 2.0
 * @description Layout racine qui enveloppe toutes les pages avec
 * navigation, footer et effets visuels (raindrops)
 */

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RaindropEffect from "@/components/RaindropEffect";

// Configuration de la police Poppins avec différents poids
// pour une typographie cohérente sur tout le site
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

// Métadonnées SEO optimisées pour le référencement
// Apparaît dans les résultats Google et lors du partage sur les réseaux sociaux
export const metadata: Metadata = {
  title: {
    default: "Rayane Laidi | Développeur Full-Stack",
    template: "%s | Rayane Laidi Portfolio",
  },
  description:
    "Portfolio professionnel de Rayane Laidi — Développeur Full-Stack spécialisé en React, Next.js, TypeScript et PHP. Découvrez mes projets, compétences techniques et mon parcours académique.",
  keywords: [
    "Rayane Laidi",
    "portfolio développeur",
    "full-stack developer",
    "React",
    "Next.js",
    "TypeScript",
    "PHP",
    "IIM Digital School",
    "web development",
    "développeur web",
  ],
  authors: [{ name: "Rayane Laidi", url: "https://github.com/RayaneLaidi" }],
  creator: "Rayane Laidi",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://rayanelaidi.dev",
    siteName: "Rayane Laidi - Portfolio Professionnel",
    title: "Rayane Laidi | Développeur Full-Stack",
    description:
      "Portfolio de Rayane Laidi — Développeur Full-Stack passionné. Explorez mes projets et compétences techniques.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Structure du layout qui enveloppe toutes les pages
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Police décorative Knewave pour les titres */}
        <link
          href="https://fonts.googleapis.com/css2?family=Knewave&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        {/* Barre de navigation fixe en haut */}
        <Navbar />
        {/* Effet visuel de fond animé */}
        <RaindropEffect />
        {/* Contenu principal de chaque page */}
        <main>{children}</main>
        {/* Pied de page avec liens et réseaux sociaux */}
        <Footer />
      </body>
    </html>
  );
}
