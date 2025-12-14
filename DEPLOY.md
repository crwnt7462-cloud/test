# 🚀 Guide de Déploiement GitHub Pages

## ✅ Ce qui a été corrigé

1. ✅ `vite.config.ts` - Ajout de `base: '/test/'`
2. ✅ Workflow GitHub Actions créé pour déploiement automatique
3. ✅ Tout est commit et push sur `main`

---

## 🔧 Configuration GitHub Pages (À FAIRE)

### Étape 1 : Activer GitHub Pages

1. Va sur ton repository : `https://github.com/crwnt7462-cloud/test`

2. Clique sur **Settings** (Paramètres) en haut à droite

3. Dans le menu de gauche, clique sur **Pages**

4. Sous **Build and deployment** :
   - **Source** : Sélectionne `GitHub Actions` (pas "Deploy from a branch")
   
5. Sauvegarde (c'est automatique normalement)

---

### Étape 2 : Lancer le Déploiement

#### Option A : Automatique (Recommandé)
Le workflow se lance automatiquement car tu as déjà push sur `main` !

1. Va dans l'onglet **Actions** de ton repo
2. Tu devrais voir un workflow "Deploy to GitHub Pages" en cours
3. Attends qu'il soit vert ✅ (environ 1-2 minutes)

#### Option B : Manuel
Si le workflow ne se lance pas :

1. Va dans **Actions**
2. Clique sur "Deploy to GitHub Pages" dans la liste de gauche
3. Clique sur **Run workflow** à droite
4. Sélectionne la branche `main`
5. Clique sur **Run workflow**

---

### Étape 3 : Accéder au Site

Une fois le workflow terminé (✅ vert) :

**URL de ton site :** `https://crwnt7462-cloud.github.io/test/`

⚠️ **Important** : L'URL finit par `/test/` (le nom de ton repo)

---

## 🐛 Si le site est encore blanc

### Vérification 1 : Base Path
Vérifie que `vite.config.ts` contient bien :
```typescript
base: '/test/',
```

### Vérification 2 : GitHub Pages Source
Dans Settings → Pages, vérifie que **Source** est bien `GitHub Actions` et pas "Deploy from a branch"

### Vérification 3 : Console du Navigateur
1. Ouvre ton site
2. Appuie sur F12 (DevTools)
3. Va dans l'onglet **Console**
4. Regarde s'il y a des erreurs 404

Si tu vois des erreurs de type `/assets/index-xxx.js` au lieu de `/test/assets/index-xxx.js`, c'est que le `base` n'est pas pris en compte.

### Vérification 4 : Cache du Navigateur
Fais un **hard refresh** :
- Windows/Linux : `Ctrl + Shift + R`
- Mac : `Cmd + Shift + R`

---

## 📝 Workflow Expliqué

Le fichier `.github/workflows/deploy.yml` fait automatiquement :

1. **Checkout** : Récupère le code
2. **Setup Node** : Installe Node.js 18
3. **Install** : Lance `npm ci` (install propre)
4. **Build** : Lance `npm run build` (crée le dossier `dist/`)
5. **Upload** : Upload le dossier `dist/` vers GitHub Pages
6. **Deploy** : Déploie sur `https://ton-username.github.io/test/`

**Déclenchement** :
- ✅ À chaque push sur `main`
- ✅ Manuellement via l'onglet Actions

---

## 🔄 Workflow de Développement

### Pour mettre à jour le site :

```bash
# 1. Fais tes modifications dans le code
# 2. Commit
git add .
git commit -m "Update: description des changements"

# 3. Push sur main
git push origin main

# 4. GitHub Actions déploie automatiquement !
# 5. Attends 1-2 minutes
# 6. Refresh ton site
```

---

## 🎯 URLs Importantes

- **Repository** : `https://github.com/crwnt7462-cloud/test`
- **Site déployé** : `https://crwnt7462-cloud.github.io/test/`
- **Actions** : `https://github.com/crwnt7462-cloud/test/actions`
- **Settings Pages** : `https://github.com/crwnt7462-cloud/test/settings/pages`

---

## 🆘 Dépannage Avancé

### Le workflow échoue ❌

1. Va dans **Actions**
2. Clique sur le workflow en échec
3. Clique sur le job "build" ou "deploy"
4. Regarde les logs pour voir l'erreur

**Erreurs courantes :**
- `npm ci` échoue → Supprime `package-lock.json`, commit et push
- Permission denied → Va dans Settings → Actions → General → Workflow permissions → Sélectionne "Read and write permissions"

### Le site se charge mais est cassé

- Vérifie que `base: '/test/'` est bien dans `vite.config.ts`
- Rebuild local : `npm run build`
- Commit et push le changement

### Le site affiche une vieille version

- GitHub Pages peut mettre jusqu'à 5 minutes pour mettre à jour
- Vide le cache de ton navigateur (Ctrl+Shift+Del)
- Essaie en navigation privée

---

## ✅ Checklist de Déploiement

- [ ] `vite.config.ts` contient `base: '/test/'`
- [ ] Workflow `.github/workflows/deploy.yml` est créé
- [ ] Code commit et push sur `main`
- [ ] GitHub Pages activé avec source "GitHub Actions"
- [ ] Workflow a tourné et est ✅ vert
- [ ] Site accessible sur `https://crwnt7462-cloud.github.io/test/`
- [ ] Site fonctionne correctement (pas d'écran blanc)

---

## 🎉 C'est Tout !

Une fois configuré, chaque push sur `main` redéploie automatiquement ton site ! 🚀

Pour tester localement avant de déployer :
```bash
npm run build
npm run preview
# Ouvre http://localhost:4173
```

---

🌙✨ **Bon déploiement avec DreamScape !** ✨🌙
