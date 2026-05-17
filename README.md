# [Gartec Redesign 2026]

## Objectif
Refonte moderne et professionnelle du site vitrine de **Gartec**, spécialisé dans le contrôle des aires de jeux (Ludomètre FTv3).

## Stack

- **`/` à la racine** : version statique historique (`index.html`, `style.css`, `script.js`).
- **`/web`** : application **React + Vite** avec **Framer Motion** (animations scroll, transitions, réduction du mouvement).

### Lancer la version React (recommandée)

```bash
cd web
npm install
npm run dev
```

Puis ouvrir l’URL affichée dans le terminal (souvent `http://localhost:5173`).

### Build production

```bash
cd web
npm run build
```

## Fonctionnalités
- Interface responsive et identité visuelle Gartec (CSS partagé).
- Version **`web`** : animations **Framer Motion** (entrées au scroll, grilles stagger, carte logiciel, histogramme, navigation, formulaire).
- Respect de **`prefers-reduced-motion`** : animations désactivées ou quasi instantanées.
- Ancres avec offset navbar ; menu mobile animé.

---
*Réalisé pour MONTANA CONNECT AGENCE*
