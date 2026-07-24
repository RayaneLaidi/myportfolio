/**
 * Données centralisées du portfolio
 * Types TypeScript, projets, compétences, chronologie et informations personnelles
 * 
 * @author Rayane Laidi
 * @version 2.0
 * @description Fichier de données unique servant de source de vérité pour tout le portfolio.
 * Centralisation pour faciliter les mises à jour et maintenir la cohérence.
 */

// ===== TYPES & INTERFACES =====

// Structure d'un projet
export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tag: string;
  tech: string[];
  image?: string;
  gradient: string;
  link?: string;
  github?: string;
  year: string;
  role: string;
  highlights: string[];
}

// Structure d'une compétence
export interface Skill {
  icon: string;
  name: string;
  description: string;
  technologies: string[];
}

// Structure d'une entrée de chronologie
export interface TimelineEntry {
  year: string;
  title: string;
  organization: string;
  description: string;
  type: "education" | "work";
}

// ===== PROJETS =====
// Portfolio de mes réalisations professionnelles et académiques

export const projects: Project[] = [
  {
    slug: "Street-Artiste-Website",
    title: "Refonte du Site Carole B",
    description:
      "Refonte complète du site web d'une artiste de rue et reconstruction de sa boutique en ligne.",
    longDescription:
      "Projet de refonte intégrale du site web d'une artiste de rue. L'objectif principal était de reconstruire sa boutique en ligne avec des technologies modernes tout en maintenant l'accessibilité et la confidentialité. Collaboration étroite avec la cliente pour comprendre ses besoins et les traduire en une présence en ligne améliorée et plus professionnelle.",
    tag: "Application Web",
    tech: ["Sass", "JSON", "JavaScript"],
    gradient: "linear-gradient(135deg, #16a34a 0%, #059669 100%)",
    year: "2025",
    role: "Développeur Full-Stack",
    highlights: [
      "Refonte complète de l'interface utilisateur pour une meilleure accessibilité",
      "Reconstruction de la boutique en ligne avec techniques modernes",
      "Design responsive adapté à tous les formats d'écran",
      "Utilisation de Sass pour une architecture CSS maintenable",
    ],
  },
  {
    slug: "jazz-in-marciac",
    title: "Jazz in Marciac",
    description:
      "Projet étudiant à l'IIM - développeur principal sur la refonte du site du festival Jazz in Marciac. Première place remportée.",
    longDescription:
      "Projet en équipe à l'IIM Digital School où nous devions reconcevoir le site web du festival Jazz in Marciac. En tant que développeur principal, j'ai traduit les maquettes des designers en code fonctionnel. Malgré des délais serrés, nous avons réussi à livrer un site de qualité qui a remporté la première place du concours.",
    tag: "Design Web",
    tech: ["HTML5", "CSS3", "JavaScript"],
    gradient: "linear-gradient(135deg, #1e3a5f 0%, #4a90d9 100%)",
    year: "2025",
    role: "Développeur Backend",
    highlights: [
      "Première place remportée parmi toutes les équipes participantes",
      "Ajout d'animations de scroll fluides et de transitions",
      "Construction complète de la mise en page depuis les maquettes Figma",
      "Collaboration avec designers et chefs de projet de l'équipe",
    ],
  },
  {
  slug: "smart-button-dashboard",
  title: "Dashboard Web pour Boutons Intelligents",
  description:
    "Développement d'un tableau de bord web en temps réel connecté à des boutons physiques via Raspberry Pi Pico et serveur Flask.",
  longDescription:
    "Projet full-stack connectant des boutons physiques câblés à un Raspberry Pi Pico avec une interface web. Lorsqu'un bouton est pressé, le serveur met instantanément à jour l'interface du navigateur pour afficher quel bouton a été déclenché. Le projet combine interaction matérielle, logique backend et mises à jour frontend en temps réel. L'objectif était de faire le pont entre l'informatique physique et le développement web tout en assurant une faible latence et une architecture propre.",
  tag: "Projet Full-Stack",
  tech: ["Python", "Flask", "JavaScript", "HTML", "CSS", "Raspberry Pi Pico"],
  gradient: "linear-gradient(135deg, #111827 0%, #4b5563 100%)",
  year: "2025",
  role: "Développeur Full-Stack",
  highlights: [
    "Connexion des entrées matérielles à un serveur web",
    "Développement d'un backend Flask pour gérer les requêtes en temps réel",
    "Mise à jour dynamique du frontend basée sur les états des boutons",
    "Communication structurée entre microcontrôleur et serveur",
    "Optimisation du temps de réponse pour un feedback quasi-instantané"
  ],
},
  {
  slug: "pokemon-interactive-cards",
  title: "Cartes Interactives Pokémon",
  description:
    "Développement d'une interface de cartes Pokémon dynamiques utilisant PokeAPI avec récupération de données en temps réel et effets UI interactifs.",
  longDescription:
    "Application web qui récupère les données Pokémon en temps réel via PokeAPI et les affiche sous forme de cartes interactives entièrement designées. L'objectif était de recréer l'esthétique des vraies cartes Pokémon tout en les rendant dynamiques et pilotées par les données. Chaque carte inclut les statistiques, types, capacités et animations. Focus sur une UI soignée, des transitions fluides et une gestion efficace de l'API. Ce projet m'a permis de renforcer mes compétences en JavaScript asynchrone, gestion d'état et logique UI.",
  tag: "Projet Solo",
  tech: ["HTML", "CSS", "JavaScript", "PokeAPI"],
  gradient: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
  year: "2024",
  role: "Développeur Frontend",
  highlights: [
    "Intégration de données en temps réel depuis PokeAPI",
    "Conception de composants de cartes Pokémon dynamiques",
    "Gestion des appels API asynchrones avec fetch",
    "Implémentation de fonctionnalités de filtrage et recherche",
    "Création d'effets de survol et d'interactions fluides"
  ],
}
];

// ===== COMPÉTENCES =====
// Ensemble de mes compétences techniques et outils maîtrisés

export const skills: Skill[] = [
  {
    icon: "💻",
    name: "Développement Web",
    description: "Création de sites web et applications web modernes",
    technologies: ["React", "Next.js", "TypeScript", "Node.js"],
  },
  {
    icon: "🎨",
    name: "Design UI/UX",
    description: "Conception d'interfaces élégantes et intuitives",
    technologies: ["Figma", "Adobe XD", "Prototyping", "Design Systems"],
  },
  {
    icon: "📱",
    name: "Design Responsive",
    description: "Création de mises en page adaptatives pour tous les écrans",
    technologies: ["CSS Grid", "Flexbox", "Tailwind CSS", "Media Queries"],
  },
  {
    icon: "⚡",
    name: "Performance Web",
    description: "Optimisation pour des expériences rapides et fluides",
    technologies: ["Lighthouse", "Core Web Vitals", "Lazy Loading", "Caching"],
  },
  {
    icon: "🚀",
    name: "Frameworks Modernes",
    description: "Maîtrise des outils et frameworks d'aujourd'hui",
    technologies: ["Next.js",  "Three.js", "Sass"],
  },
  {
    icon: "✨",
    name: "Animations Web",
    description: "Ajout de mouvement et de vie aux interfaces",
    technologies: ["CSS Animations", "Framer Motion", "GSAP", "Spline"],
  },
];

// ===== CHRONOLOGIE =====
// Mon parcours académique et professionnel

export const timeline: TimelineEntry[] = [
  {
    year: "2023 - 2025",
    title: "Bachelor Développement Web",
    organization: "IIM Digital School",
    description:
      "Formation complète en développement web, UI/UX et gestion de projet. Participation à de nombreux projets d'équipe et hackathons.",
    type: "education",
  },
  {
    year: "2025",
    title: "Développeur Fullstack / Backend",
    organization: "Projets académiques variés",
    description:
      "Développement de sites web et applications web pour des projets étudiants, utilisant différents langages et frameworks pour élargir mes compétences techniques.",
    type: "education",
  },
  {
    year: "2024",
    title: "Développement Site Web Artiste",
    organization: "Carole B",
    description:
      "Création complète d'un site web professionnel avec WordPress et intégration d'une boutique WooCommerce pour la vente en ligne des œuvres.",
    type: "work",
  },
];

// ===== INFORMATIONS PERSONNELLES =====
// Mes coordonnées et présentation

export const personalInfo = {
  name: "Rayane Laidi",
  title: "Développeur Fullstack / Backend",
  email: "rayanelaidi8@gmail.com",
  bio: "Bonjour, je suis Rayane Laidi, étudiant en deuxième année à l'IIM. Je travaille sur des projets qui mélangent technologie et créativité. Mon expérience multiculturelle a enrichi ma façon d'aborder la résolution de problèmes et le design.",
  bioExtended:
    "Je me concentre sur la création de solutions qui fonctionnent bien et qui sont esthétiquement soignées. Code propre et design réfléchi sont mes priorités. Des expériences interactives 3D aux applications web full-stack, j'aime explorer les limites du développement web moderne.",
  socialLinks: {
    email: "mailto:rayanelaidi8@gmail.com",
    linkedin: "https://www.linkedin.com/in/rayane-laidi/",
    github: "https://github.com/RayaneLaidi",
    
  },
};
