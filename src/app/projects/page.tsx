/**
 * Page liste des projets
 * Affichage de tous les projets avec système de filtrage par catégorie
 * 
 * @author Rayane Laidi
 * @version 2.0
 * @description Page présentant l'ensemble de mon portfolio de projets
 * avec filtrage dynamique par tags (React, PHP, 3D, etc.)
 */

import type { Metadata } from "next";
import { projects } from "@/data/portfolio";
import ProjectFilter from "@/components/ProjectFilter";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Projets - Rayane Laidi",
  description:
    "Découvrez les projets de Rayane Laidi — applications web, sites redesignés, expériences 3D interactives et dashboards professionnels.",
};

export default function ProjectsPage() {
  return (
    <section
      style={{
        background: "#0c0c14",
        padding: "140px 50px 100px",
        minHeight: "100vh",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <AnimatedSection>
          <h1 className="section-title">Mes Projets</h1>
          <p className="section-subtitle">
            Une collection de mes réalisations — filtrez par catégorie pour explorer
          </p>
        </AnimatedSection>

        <ProjectFilter projects={projects} />
      </div>
    </section>
  );
}
