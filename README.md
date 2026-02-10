# V.E. Ash Design - Site Web

Site web professionnel pour l'agence de décoration V.E. Ash Design dans l'univers GTA RP Cyberpunk.

## 📁 Structure des fichiers

```
ash-design/
│
├── index.html          # Structure HTML principale
├── style.css           # Tous les styles CSS
├── script.js           # Toute la logique JavaScript
└── images/             # Dossier pour vos images (à créer)
    ├── villa-neon-salon.jpg
    ├── villa-neon-chambre.jpg
    └── ... (autres images)
```

## 🎨 Fonctionnalités

### 1. Section Hero
- Animation parallaxe
- Logo et titre animés
- Indicateur de scroll

### 2. Section Forfaits (3 packages)
- **Essentiel** - 15K$
- **Premium** - 35K$
- **Elite** - 75K$
- Effets hover élégants
- Boutons interactifs

### 3. Section Portfolio (10 projets)
Chaque projet possède :
- Une carte cliquable
- Une description
- Un modal avec 4 images uniques

### 4. Modals Personnalisés
Chaque projet a ses propres images :

1. **Villa Néon** : villa-neon-salon.jpg, villa-neon-chambre.jpg, villa-neon-cuisine.jpg, villa-neon-sdb.jpg
2. **Penthouse Virtuel** : penthouse-vue.jpg, penthouse-holo.jpg, penthouse-terrasse.jpg, penthouse-bureau.jpg
3. **Gaming Lounge** : gaming-setup.jpg, gaming-stream.jpg, gaming-rgb.jpg, gaming-lounge.jpg
4. **Bar Dystopique** : bar-comptoir.jpg, bar-lounge.jpg, bar-neon.jpg, bar-cave.jpg
5. **Boutique Tech** : boutique-vitrine.jpg, boutique-expo.jpg, boutique-comptoir.jpg, boutique-vr.jpg
6. **Studio Sonore** : studio-cabine.jpg, studio-regie.jpg, studio-vocal.jpg, studio-lounge.jpg
7. **Bureau Corporate** : bureau-openspace.jpg, bureau-reunion.jpg, bureau-collab.jpg, bureau-detente.jpg
8. **Loft Urbain** : loft-living.jpg, loft-cuisine.jpg, loft-mezzanine.jpg, loft-details.jpg
9. **Showroom Luxe** : showroom-entree.jpg, showroom-expo.jpg, showroom-light.jpg, showroom-vip.jpg
10. **Résidence Émeraude** : emeraude-facade.jpg, emeraude-salon.jpg, emeraude-bio.jpg, emeraude-terrasse.jpg

## 🖼️ Comment ajouter vos images

### Étape 1 : Créer le dossier images
```
mkdir images
```

### Étape 2 : Ajouter vos photos
Placez vos images dans le dossier `images/` avec les noms correspondants listés ci-dessus.

### Étape 3 : Modifier le script.js
Dans `script.js`, ligne 157-168, remplacez :

```javascript
// Ligne actuelle (placeholder)
imageDiv.innerHTML = `
    <div class="modal-image-placeholder">
        <p style="color: #C29D58; margin-bottom: 10px;">${image.name}</p>
        <p style="color: #666; font-size: 0.8rem;">Photo: ${image.placeholder}</p>
    </div>
`;
```

Par :

```javascript
// Pour afficher vos vraies images
imageDiv.innerHTML = `<img src="images/${image.placeholder}" alt="${image.name}">`;
```

## 🎯 Personnalisation

### Modifier les prix
Dans `index.html`, recherchez `.package-price` et modifiez les valeurs.

### Modifier les forfaits
Dans `index.html`, section `packages-section`, modifiez les listes `<ul class="package-features">`.

### Modifier les projets
Dans `script.js`, modifiez l'objet `projectData` pour :
- Changer les titres
- Modifier les descriptions
- Ajouter/supprimer des projets
- Changer les noms d'images

### Changer les couleurs
Dans `style.css`, remplacez :
- `#C29D58` (or/doré) par votre couleur
- `#0a0a0a` (noir profond) par votre fond

## 🚀 Utilisation

1. Ouvrez `index.html` dans votre navigateur
2. Le site est entièrement fonctionnel même sans images
3. Ajoutez vos images pour la version finale

## 📱 Responsive

Le site est entièrement responsive et s'adapte à :
- Desktop (1920px+)
- Tablette (768px - 1024px)
- Mobile (320px - 767px)

## ✨ Effets spéciaux

- Parallaxe sur le hero
- Animations au scroll (fade-in)
- Effets hover sur toutes les cartes
- Transitions fluides
- Modal avec fermeture ESC ou clic extérieur

## 🛠️ Technologies utilisées

- HTML5
- CSS3 (Grid, Flexbox, Animations)
- JavaScript Vanilla (ES6+)
- Aucune dépendance externe

## 📝 Notes

- Les images sont des placeholders pour l'instant
- Ajoutez vos vraies photos pour finaliser
- Testez sur différents navigateurs
- Optimisez vos images (max 500KB par image)

## 🎨 Palette de couleurs

- Noir principal : `#0a0a0a`
- Noir secondaire : `#1a1a1a`
- Or/Doré : `#C29D58`
- Or clair : `#D4AF6A`
- Gris : `#888888`
- Blanc : `#ffffff`

---

**V.E. Ash Design © 2077 - Tous droits réservés**
