# 🌟 Portfolio Professionnel - Rayane Laidi

**Portfolio interactif et moderne développé avec Next.js 16, React 19 et TypeScript**

> Développeur Full-Stack spécialisé en React, Next.js, TypeScript et PHP  
> Étudiant à IIM Digital School  
> Passionné par le développement web moderne et les interfaces utilisateur innovantes

---

## 📋 Table des matières

- [À propos](#à-propos)
- [Technologies](#technologies)
- [Fonctionnalités](#fonctionnalités)
- [Installation](#installation)
- [Scripts](#scripts)
- [Structure du projet](#structure-du-projet)
- [Architecture](#architecture)
- [Optimisations](#optimisations)
- [Contact](#contact)
- [Licence](#licence)

---

## 🎯 À propos

Portfolio personnel conçu pour présenter mes compétences techniques, mes projets et mon parcours académique de manière interactive et visuellement attractive.

**Objectifs du projet :**

- ✨ Interface moderne et épurée avec animations fluides
- 🎨 Design minimaliste avec palette de couleurs bleues professionnelles
- 📱 Responsive design adapté à tous les écrans
- ⚡ Performance optimale avec Next.js App Router
- 🎭 Effets visuels immersifs (effet gouttes animées)
- 📬 Formulaire de contact fonctionnel avec validation

---

## 🛠️ Technologies

### Core Stack

- **Next.js 16.1.6** - Framework React avec App Router
- **React 19.2.3** - Bibliothèque UI avec Server Components
- **TypeScript 5** - Typage statique pour plus de robustesse
- **Tailwind CSS 4** - Framework CSS utilitaire moderne

### Styling & Fonts

- **@tailwindcss/postcss** - Configuration PostCSS pour Tailwind
- **Google Fonts** - Poppins (300-700) & Knewave (display)
- **CSS Variables** - Système de thème cohérent

### Dev Tools

- **ESLint** - Linting du code
- **TypeScript ESLint** - Règles spécifiques TypeScript
- **PostCSS** - Transformation CSS

---

## ✨ Fonctionnalités

### 🏠 Page d'accueil

- Section hero avec titre animé et effets visuels
- Présentation des compétences clés
- Sélection de projets en vedette
- Call-to-action vers projets et page À propos

### 💼 Page Projets

- Grille de projets avec prévisualisations
- Système de filtrage par catégorie (React, PHP, 3D, etc.)
- Cartes interactives avec hover effects
- Navigation vers pages détaillées de chaque projet

### 👤 Page À propos

- Biographie et présentation personnelle
- Compétences techniques détaillées par catégorie
- Timeline académique et professionnelle
- Animations au scroll

### 📬 Page Contact

- Formulaire de contact avec validation client
- Gestion des états (loading, success, error)
- Envoi vers API route Next.js
- Liens vers réseaux sociaux

### 🎨 Design & UX

- **Navigation fixe** avec effet de flou au scroll
- **Animations fluides** déclenchées par Intersection Observer
- **Effet gouttes** - Images animées en arrière-plan
- **Mode sombre** optimisé pour réduire la fatigue visuelle
- **Transitions douces** sur tous les éléments interactifs

---

## 📦 Installation

### Prérequis

- Node.js 18.17 ou supérieur
- npm ou yarn ou pnpm

### Étapes d'installation

```bash
# 1. Cloner le repository
git clone https://github.com/RayaneLaidi/portfolio.git
cd portfolio

# 2. Installer les dépendances
npm install
# ou
yarn install
# ou
pnpm install

# 3. Lancer le serveur de développement
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Le site sera accessible à l'adresse : **http://localhost:3000**

---

## 🚀 Scripts

```bash
# Développement - Lance le serveur avec hot-reload
npm run dev

# Build - Génère la version optimisée pour production
npm run build

# Start - Lance le serveur de production
npm start

# Lint - Vérifie la qualité du code
npm run lint

# Export statique - Génère un site HTML/CSS/JS statique
npm run build && next export
```

---

## 📁 Structure du projet

```
myportfolio/
├── public/                    # Fichiers statiques (images, fonts)
│   ├── imgs/                  # Images des projets et effects
│   └── ...
├── src/
│   ├── app/                   # Pages et routes (App Router)
│   │   ├── about/            # Page À propos
│   │   ├── api/              # API Routes
│   │   │   └── contact/      # Endpoint formulaire de contact
│   │   ├── contact/          # Page Contact
│   │   ├── project/          # Pages de détails des projets
│   │   ├── projects/         # Page liste des projets
│   │   ├── layout.tsx        # Layout racine
│   │   ├── page.tsx          # Page d'accueil
│   │   └── globals.css       # Styles globaux
│   ├── components/            # Composants réutilisables
│   │   ├── AnimatedSection.tsx   # Wrapper d'animation
│   │   ├── ContactForm.tsx       # Formulaire de contact
│   │   ├── Footer.tsx            # Pied de page
│   │   ├── Navbar.tsx            # Barre de navigation
│   │   ├── ProjectCard.tsx       # Carte de projet
│   │   ├── ProjectFilter.tsx     # Filtre de projets
│   │   ├── RaindropEffect.tsx    # Effet visuel animé
│   │   ├── SkillCard.tsx         # Carte de compétence
│   │   └── TimelineItem.tsx      # Élément de chronologie
│   └── data/
│       └── portfolio.ts       # Données centralisées (projets, skills, etc.)
├── .eslintrc.json            # Configuration ESLint
├── next.config.ts            # Configuration Next.js
├── package.json              # Dépendances et scripts
├── postcss.config.mjs        # Configuration PostCSS
├── tailwind.config.ts        # Configuration Tailwind
├── tsconfig.json             # Configuration TypeScript
└── README.md                 # Ce fichier

```

---

## 🏗️ Architecture

### Design Patterns utilisés

#### Component-Based Architecture

- Composants modulaires et réutilisables
- Séparation stricte des responsabilités
- Props typées avec TypeScript

#### Server & Client Components

- Server Components par défaut (performance)
- Client Components pour interactivité (`"use client"`)
- Optimisation du bundle JavaScript

#### Data Centralization

- Toutes les données dans `portfolio.ts`
- Single source of truth
- Facilite la maintenance et les mises à jour

#### Custom Hooks & Effects

- `useEffect` pour Intersection Observer
- `useState` pour gestion d'état local
- Cleanup functions pour éviter les fuites mémoire

### Animations

- **CSS Keyframes** pour animations de base
- **Intersection Observer API** pour animations au scroll
- **Transitions CSS** pour interactions
- Délais progressifs pour effet de cascade

---

## ⚡ Optimisations

### Performance

- ✅ **App Router** - Routing optimisé avec layouts
- ✅ **Server Components** - Rendu côté serveur par défaut
- ✅ **Image Optimization** - next/image avec lazy loading
- ✅ **Code Splitting** - Chargement des composants à la demande
- ✅ **CSS-in-JS** - Styles inline pour critical CSS
- ✅ **Font Optimization** - Google Fonts avec display=swap

### SEO

- ✅ Métadonnées complètes (title, description, OG tags)
- ✅ Fichier robots.txt (index: true, follow: true)
- ✅ Structure sémantique HTML5
- ✅ Aria labels pour accessibilité
- ✅ Alt texts sur toutes les images

### Accessibilité

- ✅ Navigation au clavier
- ✅ Contraste des couleurs (WCAG AA)
- ✅ Focus indicators visibles
- ✅ Aria labels sur liens et boutons
- ✅ Structure de titres hiérarchique

### Responsive Design

- ✅ Mobile-first approach
- ✅ Breakpoints adaptatifs
- ✅ Menu hamburger sur mobile
- ✅ Grilles fluides et flexbox
- ✅ clamp() pour typographie responsive

---

## 📧 Contact

**Rayane Laidi**  
Développeur Full-Stack

- 📧 Email : [rayanelaidi8@gmail.com](mailto:rayanelaidi8@gmail.com)
- 💼 LinkedIn : [linkedin.com/in/rayane-laidi](https://www.linkedin.com/in/rayane-laidi/)
- 🐙 GitHub : [github.com/RayaneLaidi](https://github.com/RayaneLaidi)
- 🌐 Portfolio : [rayanelaidi.dev](https://rayanelaidi.dev)

---

## 📄 Licence

**© 2026 Rayane Laidi - Tous droits réservés**

Ce projet est la propriété exclusive de Rayane Laidi.  
Toute reproduction, distribution ou utilisation non autorisée est strictement interdite.

---

## 🚧 Roadmap

### Prochaines fonctionnalités

- [ ] Mode clair/sombre avec toggle
- [ ] Blog avec articles techniques
- [ ] Système de commentaires
- [ ] Intégration service d'emailing (SendGrid/Resend)
- [ ] Analytics et tracking des visites
- [ ] Progressive Web App (PWA)
- [ ] Multilingue (FR/EN)
- [ ] Tests unitaires et E2E

---

**Développé avec ❤️ et ☕ par Rayane Laidi**
