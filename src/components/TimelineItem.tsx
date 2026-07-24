/**
 * Composant d'entrée de chronologie
 * Affichage d'une étape du parcours (formation ou expérience)
 * 
 * @author Rayane Laidi
 * @version 2.0
 * @description Élément unique de la timeline de la page À propos
 * avec point d'ancrage, ligne de connexion et carte de contenu
 */

import type { TimelineEntry } from "@/data/portfolio";

interface TimelineItemProps {
  entry: TimelineEntry;
  index: number;
}

export default function TimelineItem({ entry, index }: TimelineItemProps) {
  const isWork = entry.type === "work";

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        position: "relative",
        paddingBottom: "40px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minWidth: "40px",
        }}
      >
        <div
          style={{
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            background: isWork ? "var(--accent)" : "var(--accent)",
            border: "3px solid rgba(255,255,255,0.1)",
            zIndex: 2,
            flexShrink: 0,
          }}
        />
        <div
          style={{
            width: "2px",
            flex: 1,
            background:
              "linear-gradient(to bottom, rgba(110,231,183,0.3), transparent)",
          }}
        />
      </div>

      <div
        className="glass-card"
        style={{
          padding: "25px",
          flex: 1,
          cursor: "default",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "10px",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: 700,
                margin: 0,
                color: "white",
                letterSpacing: "-0.01em",
              }}
            >
              {entry.title}
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "var(--accent)",
                margin: "4px 0 0",
                fontWeight: 600,
              }}
            >
              {entry.organization}
            </p>
          </div>
          <span
            style={{
              padding: "4px 12px",
              background: "rgba(110,231,183,0.12)",
              borderRadius: "6px",
              fontSize: "12px",
              fontWeight: 600,
              color: "var(--accent)",
              whiteSpace: "nowrap",
            }}
          >
            {entry.year}
          </span>
        </div>
        <p
          style={{
            fontSize: "14px",
            lineHeight: 1.6,
            color: "rgba(237,237,240,0.55)",
            margin: 0,
          }}
        >
          {entry.description}
        </p>
      </div>
    </div>
  );
}
