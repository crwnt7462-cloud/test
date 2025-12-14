# 🌙 DreamScape - Réseau Social de Rêves

**DreamScape** est un réseau social innovant qui permet de partager, matcher et découvrir les rêves des autres ! Connecte-toi à une communauté mondiale de rêveurs et découvre qui partage tes visions nocturnes. ✨

![DreamScape Banner](https://img.shields.io/badge/Dreams-Connected-9d4edd?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2.0-61dafb?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-3178c6?style=for-the-badge&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-3.3.6-38bdf8?style=for-the-badge&logo=tailwindcss)

## ✨ Fonctionnalités Principales

### 🌌 Feed de Rêves Interactif
- Interface façon Twitter optimisée pour les récits de rêves
- Timeline en temps réel avec les rêves de la communauté
- Design nocturne violet/rose/noir immersif

### 🎯 Système de Matching Intelligent
- Algorithme de similarité basé sur l'analyse de contenu
- Calcul de pourcentage de match entre rêves (jusqu'à 100%)
- Découvre qui a rêvé de choses similaires la même nuit
- Visualisation des matchs avec barre de progression

### 🏷️ Tags Automatiques
Détection intelligente de 20+ thèmes de rêves :
- 🌊 Océan, ✈️ Vol, 🐾 Animaux
- 👻 Cauchemars, 💖 Amour, 🏃 Course
- 🌈 Couleurs, 🌙 Nuit, 🎭 Étrange
- Et beaucoup d'autres !

### 📊 Statistiques de Rêveur
- **Série de jours** : Compte tes jours consécutifs de partage
- **Nombre de rêves** : Total de rêves partagés
- **Matchs trouvés** : Combien de connexions avec d'autres rêveurs
- **Meilleur match** : Ton pourcentage de similarité record

### 🔥 Tendances en Temps Réel
- Top 8 des thèmes de rêves les plus populaires
- Indicateurs de progression (↑ ↓)
- Visualisation graphique des tendances
- Faits intéressants sur les rêves

### 💬 Fonctionnalités Sociales
- **Likes** ❤️ : Apprécie les rêves des autres
- **Commentaires** 💬 : Partage ton interprétation
- **Partages** 🔄 : Diffuse les rêves fascinants
- Interactions en temps réel

## 🚀 Installation

### Prérequis
- Node.js 16+ 
- npm ou yarn

### Installation des dépendances

```bash
npm install
```

### Lancer en mode développement

```bash
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

### Build pour la production

```bash
npm run build
```

## 🎨 Design & UX

### Palette de Couleurs Nocturne
- **Dream Dark** (#0a0118) - Fond principal
- **Dream Purple** (#2d1b69, #4a2f8a) - Accents violets
- **Dream Pink** (#e91e8c, #ff6bb5) - Accents roses
- **Dream Glow** (#9d4edd) - Effets lumineux

### Effets Visuels
- Glass morphism sur les cartes
- Animations de flottement
- Effets de glow (lueur)
- Dégradés dynamiques
- Scrollbar personnalisée

## 🧠 Architecture Technique

### Stack Technologique
- **Frontend** : React 18 avec TypeScript
- **Styling** : Tailwind CSS avec thème personnalisé
- **Build Tool** : Vite
- **Icons** : Lucide React
- **Date Formatting** : date-fns

### Structure des Composants
```
src/
├── components/
│   ├── DreamCard.tsx      # Carte de rêve individuelle
│   ├── NewDreamForm.tsx   # Formulaire de nouveau rêve
│   ├── TrendsSidebar.tsx  # Sidebar des tendances
│   ├── UserStats.tsx      # Statistiques utilisateur
│   └── MatchModal.tsx     # Modal des matchs
├── utils/
│   ├── dreamMatcher.ts    # Algorithme de matching
│   └── mockData.ts        # Données de démonstration
├── types.ts               # Types TypeScript
├── App.tsx               # Composant principal
└── main.tsx              # Point d'entrée
```

### Algorithme de Matching

L'algorithme actuel utilise une **similarité de Jaccard** pour calculer les correspondances :

```typescript
similarity = (intersection / union) * 100 + variance
```

Dans une application en production, cela serait remplacé par :
- **NLP (Natural Language Processing)** avec BERT ou GPT
- **Analyse sémantique** des émotions et thèmes
- **Word embeddings** pour la compréhension contextuelle
- **Machine Learning** pour améliorer les matchs au fil du temps

## 📱 Fonctionnalités Futures

- [ ] Authentification utilisateur réelle
- [ ] Base de données persistante
- [ ] Intégration NLP avancée (GPT/BERT)
- [ ] Notifications de matchs en temps réel
- [ ] Mode journal de rêves privé
- [ ] Interprétation de rêves par IA
- [ ] Visualisations de rêves (génération d'images)
- [ ] Mode sombre/clair
- [ ] Application mobile (React Native)
- [ ] Groupes et communautés thématiques

## 🌟 Cas d'Usage

### Pour les Rêveurs Réguliers
- Garde une trace de tes rêves
- Découvre des patterns dans tes rêves
- Connecte avec des gens qui rêvent comme toi

### Pour les Curieux
- Explore les rêves fascinants des autres
- Découvre les tendances mondiales de rêves
- Partage tes rêves les plus délirants

### Pour les Chercheurs
- Étudie les patterns collectifs de rêves
- Analyse les thèmes récurrents
- Comprends la psychologie des rêves

## 🎯 Philosophie

> **"Et si quelqu'un à l'autre bout du monde rêvait exactement la même chose que toi la même nuit ?"**

DreamScape explore cette question fascinante en créant un réseau mondial de conscience onirique. Chaque nuit, des millions de personnes rêvent - et parfois, ces rêves se croisent d'une manière mystérieuse.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésite pas à :
- Reporter des bugs
- Suggérer des fonctionnalités
- Améliorer le matching algorithm
- Ajouter de nouveaux thèmes de tags

## 📄 Licence

MIT License - Fais de beaux rêves ! 🌙

## 🙏 Remerciements

Créé avec ❤️ pour tous les rêveurs du monde qui font des rêves délirants chaque nuit.

---

*"Dans les rêves, nous entrons dans un monde qui est entièrement le nôtre."* - Albus Dumbledore

🌙✨ **Bon voyage dans DreamScape !** ✨🌙
