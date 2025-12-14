# 🚀 Guide de Démarrage Rapide - DreamScape

## Installation en 3 étapes

### 1️⃣ Installer les dépendances
```bash
npm install
```

### 2️⃣ Lancer l'application
```bash
npm run dev
```

### 3️⃣ Ouvrir dans le navigateur
Ouvre ton navigateur et va sur : `http://localhost:5173`

## 🎮 Comment utiliser DreamScape

### Poster un rêve
1. Clique sur la zone "Partage ton rêve" en haut du feed
2. Écris ton rêve (jusqu'à 500 caractères)
3. Clique sur "Publier le rêve"
4. Les tags sont détectés automatiquement !
5. Les matchs avec d'autres rêves s'affichent instantanément

### Voir les matchs
- Si ton rêve a des matchs, un bouton rose apparaît sur la carte
- Clique dessus pour voir les rêves similaires avec leurs pourcentages de similarité

### Interagir avec les rêves
- ❤️ **Like** : Clique sur le cœur pour aimer un rêve
- 💬 **Commenter** : Clique sur la bulle pour ouvrir les commentaires
- 🔄 **Partager** : Clique sur l'icône de partage

### Voir les tendances
- La sidebar de droite montre les thèmes de rêves les plus populaires
- Les flèches indiquent si un thème monte ou descend en popularité

### Tes statistiques
- En haut à gauche : ton profil avec tes stats de rêveur
- 🔥 **Série** : Jours consécutifs de partage
- 🌙 **Rêves** : Nombre total de rêves partagés
- ✨ **Matchs** : Nombre de connexions trouvées
- 🏆 **Record** : Ton meilleur pourcentage de match

## 📦 Structure du Projet

```
/workspace/
├── src/
│   ├── components/       # Composants React
│   │   ├── DreamCard.tsx        # Carte de rêve
│   │   ├── NewDreamForm.tsx     # Formulaire
│   │   ├── MatchModal.tsx       # Modal des matchs
│   │   ├── TrendsSidebar.tsx    # Tendances
│   │   └── UserStats.tsx        # Statistiques
│   ├── utils/            # Utilitaires
│   │   ├── dreamMatcher.ts      # Algorithme de matching
│   │   ├── mockData.ts          # Données de démo
│   │   └── locale.ts            # Localisation FR
│   ├── App.tsx          # Composant principal
│   ├── types.ts         # Types TypeScript
│   └── index.css        # Styles globaux
├── public/              # Assets statiques
├── package.json         # Dépendances
├── tailwind.config.js   # Config Tailwind
└── vite.config.ts       # Config Vite

## 🎨 Thèmes de Tags Détectés

L'application détecte automatiquement 20+ thèmes :

- 🌊 Océan (océan, mer, eau, vague, plage, nager)
- ✈️ Vol (voler, avion, oiseau, ciel, planer)
- 🐾 Animaux (chat, chien, animal, oiseau, poisson)
- 👻 Cauchemar (peur, effrayant, monstre, angoisse)
- 💖 Amour (amour, amoureux, baiser, cœur)
- 🏃 Course (courir, poursuivi, fuir, chasser)
- 🏠 Maison (maison, chambre, appartement)
- 👥 Foule (gens, foule, monde, personnes)
- 🌈 Couleurs (couleur, arc-en-ciel, brillant)
- 🌙 Nuit (nuit, sombre, obscur, noir)
- ☀️ Jour (jour, soleil, lumière, matin)
- 🎭 Étrange (bizarre, surréaliste, impossible)
- 💀 Mort (mort, mourir, décès)
- 🎉 Fête (fête, célébration, anniversaire, joie)
- 🔥 Feu (feu, flamme, brûler, incendie)
- ❄️ Froid (froid, glace, neige, glacé, hiver)
- 🚗 Voyage (voyage, voiture, route, conduire)
- 🎓 École (école, classe, examen, étudier)
- 💼 Travail (travail, bureau, collègue, patron)
- 👨‍👩‍👧 Famille (famille, parent, mère, père)

## 🔧 Scripts Disponibles

```bash
npm run dev      # Lancer en développement
npm run build    # Build pour production
npm run preview  # Preview du build
npm run lint     # Linter le code
```

## 💡 Astuces

### Pour de meilleurs matchs
- Décris tes rêves en détail
- Mentionne les couleurs, émotions, lieux
- Utilise des mots-clés spécifiques
- Plus c'est précis, meilleurs seront les matchs !

### Rêves exemples à tester
```
Je volais au-dessus d'un océan de couleurs psychédéliques, 
avec des dauphins roses qui chantaient de la musique classique 🎵

J'étais dans une bibliothèque où les livres volaient et 
racontaient leurs histoires à voix haute

Je courais dans une forêt où les arbres étaient en cristal 
et jouaient de la musique quand le vent passait
```

## 🐛 Dépannage

### Les packages ne s'installent pas
```bash
rm -rf node_modules package-lock.json
npm install
```

### L'app ne démarre pas
- Vérifie que Node.js 16+ est installé : `node --version`
- Vérifie que le port 5173 est libre
- Regarde la console pour les erreurs

### Les styles ne s'appliquent pas
```bash
npm run dev
# Rafraîchis le navigateur avec Ctrl+Shift+R
```

## 🌟 Prochaines Étapes

Une fois que tu as exploré l'app :
1. Modifie les données dans `src/utils/mockData.ts`
2. Ajoute de nouveaux thèmes de tags dans `src/utils/dreamMatcher.ts`
3. Personnalise les couleurs dans `tailwind.config.js`
4. Ajoute de nouvelles fonctionnalités !

## 📚 Ressources

- [Documentation React](https://react.dev)
- [Documentation TypeScript](https://www.typescriptlang.org/docs/)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- [Documentation Vite](https://vitejs.dev)
- [Lucide Icons](https://lucide.dev)

---

🌙 **Bon voyage dans DreamScape !** ✨
