/**
 * Composant d'animation au scroll
 * Wrapper d'animation déclenchée par Intersection Observer
 * 
 * @author Rayane Laidi
 * @version 2.0
 * @description Enveloppe n'importe quel contenu pour ajouter une animation
 * qui se déclenche automatiquement lorsque l'élément entre dans le viewport
 */

"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: "fade-in-up" | "fade-in" | "slide-in-left" | "slide-in-right";
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedSection({
  children,
  animation = "fade-in-up",
  delay = 0,
  className = "",
  style = {},
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Détecte quand l'élément entre dans le viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element); // Ne s'anime qu'une fois, pas de répétition au scroll
        }
      },
      {
        threshold: 0.1, // Se déclenche quand 10% de l'élément est visible
        rootMargin: "0px 0px -100px 0px", // Offset pour anticiper l'entrée
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // Mapping des noms d'animations vers les classes CSS
  const animationMap = {
    "fade-in-up": "animate-fade-in-up",
    "fade-in": "animate-fade-in",
    "slide-in-left": "animate-slide-in-left",
    "slide-in-right": "animate-slide-in-right",
  };

  return (
    <div
      ref={ref}
      className={`${isVisible ? animationMap[animation] : ""} ${className}`}
      style={{
        opacity: isVisible ? undefined : 0, // hidden until the observer triggers, then the css animation takes over
        animationDelay: `${delay}ms`,
        animationFillMode: "forwards", // keeps the final state after animation ends (stays visible)
        ...style,
      }}
    >
      {children}
    </div>
  );
}
