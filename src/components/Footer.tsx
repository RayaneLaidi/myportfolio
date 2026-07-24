/**
 * Composant de pied de page
 * Navigation secondaire, liens sociaux et copyright
 * 
 * @author Rayane Laidi
 * @version 2.0
 * @description Footer présent sur toutes les pages avec liens de navigation,
 * icônes de réseaux sociaux et mentions légales
 */

import Link from "next/link";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#08080d",
        padding: "48px 40px 28px",
        textAlign: "center",
        borderTop: "1px solid rgba(255, 255, 255, 0.06)",
      }}
    >
      {/* Navigation secondaire */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginBottom: "30px",
          flexWrap: "wrap",
        }}
      >
        <Link
          href="/"
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "14px",
            transition: "color 0.3s",
          }}
        >
          Accueil
        </Link>
        <Link
          href="/projects"
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "14px",
            transition: "color 0.3s",
          }}
        >
          Projets
        </Link>
        <Link
          href="/about"
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "14px",
            transition: "color 0.3s",
          }}
        >
          À propos
        </Link>
        <Link
          href="/contact"
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "14px",
            transition: "color 0.3s",
          }}
        >
          Contact
        </Link>
      </div>

      {/* Liens vers les réseaux sociaux */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <a
          href={personalInfo.socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub de Rayane Laidi"
          style={{ fontSize: "24px", transition: "transform 0.2s" }}
        >
          🐙
        </a>
        <a
          href={personalInfo.socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn de Rayane Laidi"
          style={{ fontSize: "24px", transition: "transform 0.2s" }}
        >
          💼
        </a>
        <a
          href={personalInfo.socialLinks.email}
          aria-label="Envoyer un email à Rayane Laidi"
          style={{ fontSize: "24px", transition: "transform 0.2s" }}
        >
          📧
        </a>
      </div>

      {/* Copyright et mentions légales */}
      <p
        style={{
          color: "rgba(255,255,255,0.4)",
          fontSize: "13px",
          margin: 0,
        }}
      >
        © {currentYear} {personalInfo.name}. Tous droits réservés.
      </p>
    </footer>
  );
}
