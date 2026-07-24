/**
 * Configuration Next.js
 * Paramètres de build et export statique
 * 
 * @author Rayane Laidi
 * @version 2.0
 * @description Configuration pour l'export statique du portfolio
 * avec désactivation de l'optimisation d'images pour compatibilité static
 */

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Export statique HTML/CSS/JS
  images: {
    unoptimized: true, // Désactivé pour l'export statique
  },
};

export default nextConfig;
