/**
 * Page À propos
 * Présentation complète du parcours, compétences et chronologie
 * 
 * @author Rayane Laidi
 * @version 2.0
 * @description Page dédiée à la présentation détaillée de mon profil,
 * mes compétences techniques organisées par catégorie,
 * et ma timeline académique et professionnelle
 */

import type { Metadata } from "next";
import { personalInfo, timeline, skills } from "@/data/portfolio";
import TimelineItem from "@/components/TimelineItem";
import SkillCard from "@/components/SkillCard";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "À propos de Rayane Laidi",
  description: "Découvrez mon parcours, mes compétences techniques en développement web et ma chronologie académique.",
};

export default function AboutPage() {
  return (
    <section style={{ padding: "120px 24px", minHeight: "100vh" }}>
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <AnimatedSection>
          <h1 className="section-title">À propos de moi</h1>
          <p className="section-subtitle">{personalInfo.bio}</p>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <h2 style={{ marginTop: 32, marginBottom: 16 }}>Compétences Techniques</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))", gap: 16 }}>
            {skills.map((s) => (
              <SkillCard key={s.name} skill={s} detailed />
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <h2 style={{ marginTop: 40, marginBottom: 16 }}>Parcours Académique</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {timeline.map((entry, i) => (
              <TimelineItem key={`${entry.year}-${i}`} entry={entry} index={i} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
