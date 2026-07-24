/**
 * Effet de fond animé - gouttes tombantes
 * Images d'albums qui tombent en arrière-plan
 * 
 * @author Rayane Laidi
 * @version 2.0
 * @description Animation décorative de fond purément esthétique,
 * ne bloque pas les interactions et s'exécute de manière continue
 */

"use client";

import { useEffect, useRef } from "react";

// Images utilisées pour les gouttes tombantes
const images = ["/imgs/drake.jpg", "/imgs/her loss.jpg", "/imgs/tecca .jpg"];

export default function RaindropEffect() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Crée une seule goutte avec image et position aléatoires
    function createRaindrop() {
      if (!container) return;

      const drop = document.createElement("div");
      drop.className = "raindrop";

      // Sélectionne une image aléatoire
      const img = document.createElement("img");
      const randomImage = images[Math.floor(Math.random() * images.length)];
      img.src = randomImage;
      img.alt = "";
      img.loading = "lazy";

      // Position et vitesse aléatoires pour la variété
      const startX = Math.random() * window.innerWidth;
      const duration = 3 + Math.random() * 4;
      const delay = Math.random() * 2;

      drop.style.left = `${startX}px`;
      drop.style.top = "-100px";
      drop.style.animationDuration = `${duration}s`;
      drop.style.animationDelay = `${delay}s`;

      drop.appendChild(img);
      container.appendChild(drop);

      // Nettoyage après animation pour éviter les fuites mémoire
      setTimeout(() => {
        drop.remove();
      }, (duration + delay) * 1000);
    }

    // Génère une nouvelle goutte toutes les 800ms
    const interval = setInterval(createRaindrop, 800);

    // Lance quelques gouttes immédiatement au démarrage
    for (let i = 0; i < 3; i++) {
      setTimeout(createRaindrop, i * 100);
    }

    // Nettoyage lors du démontage du composant
    return () => {
      clearInterval(interval);
      if (container) {
        container.innerHTML = "";
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true" // screen readers should ignore this, its just eye candy
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 5,
        overflow: "hidden",
      }}
    />
  );
}
