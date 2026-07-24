/**
 * Composant de filtre de projets
 * Filtrage dynamique des projets par tags/catégories
 * 
 * @author Rayane Laidi
 * @version 2.0
 * @description Système de filtrage interactif permettant de trier
 * les projets par catégorie (React, PHP, 3D, etc.)
 */

"use client";

import { useState } from "react";
import type { Project } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";
import AnimatedSection from "./AnimatedSection";

interface ProjectFilterProps {
  projects: Project[];
}

export default function ProjectFilter({ projects }: ProjectFilterProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  // Extraction des tags uniques des projets + ajout de "tous"
  // Set supprime les doublons, spread le convertit en tableau
  const tags = ["all", ...new Set(projects.map((p) => p.tag.toLowerCase()))];

  // Filtrage des projets selon la sélection
  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.tag.toLowerCase() === activeFilter);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          marginBottom: "50px",
          flexWrap: "wrap",
        }}
      >
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveFilter(tag)}
            style={{
              padding: "8px 20px",
              borderRadius: "8px",
              border:
                activeFilter === tag
                  ? "1px solid var(--accent)"
                  : "1px solid rgba(255,255,255,0.08)",
              background:
                activeFilter === tag
                  ? "rgba(110,231,183,0.12)"
                  : "rgba(255, 255, 255, 0.03)",
              color: activeFilter === tag ? "var(--accent)" : "rgba(237,237,240,0.5)",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s ease",
              textTransform: "capitalize",
              fontFamily: "inherit",
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "40px",
        }}
      >
        {filtered.map((project, index) => (
          <AnimatedSection key={project.slug} delay={index * 100}>
            <ProjectCard project={project} />
          </AnimatedSection>
        ))}
      </div>

      {filtered.length === 0 && (
        <p
          style={{
            textAlign: "center",
            color: "rgba(255,255,255,0.5)",
            fontSize: "18px",
            padding: "60px 0",
          }}
        >
          No projects found for this filter.
        </p>
      )}
    </div>
  );
}
