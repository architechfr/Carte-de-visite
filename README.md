# Carte de visite numérique

Générateur de carte de visite numérique (PWA) grand public : on choisit un modèle, on remplit ses infos, on partage par QR code.

🔗 **En ligne :** https://architechfr.github.io/Carte-de-visite/

## Fonctionnalités

- **10 modèles** prêts à l'emploi (mise en page + paire typographique + palette), personnalisables : 9 typos, 10 palettes, couleur libre.
- **Logo** : aucun, initiales générées, icône métier (14 choix) ou logo importé (PNG/SVG, teinte d'origine / blanc / noir).
- **Éditeur live** : photo, identité, fonction, entreprise, coordonnées, réseaux sociaux.
- **Placement libre** (carte imprimable) : chaque élément se déplace à la souris ou au doigt, guides magnétiques, taille réglable (poignée, pincement, A−/A+), masquer / réafficher.
- **Annuler / Rétablir / Effacer** : historique des modifications (Ctrl+Z / Ctrl+Maj+Z), effacement annulable.
- **Glisser-déposer** (PC) : photo ou logo déposé directement depuis un dossier.
- **Aperçu instantané** : carte numérique et carte imprimable 85×55 aux couleurs du modèle.
- **Signature mail** : signature HTML aux couleurs du modèle (polices compatibles messageries), copie en un clic pour Gmail, Outlook, Apple Mail, avec lien « Enregistrer mon contact ».
- **Enregistrer le contact** : export vCard (`.vcf`) — s'ajoute directement aux contacts du téléphone.
- **Partage** : lien dont l'état complet de la carte est encodé dans l'URL (aucun serveur requis).
- **QR code** : à scanner pour ouvrir la carte sur le téléphone d'un tiers, avec mode présentation plein écran.
- **PWA** : installable sur iPhone / Android, fonctionne hors-ligne (service worker).

## Structure

| Fichier | Rôle |
|---|---|
| `index.html` | Application complète (HTML + CSS + JS inline) |
| `qrcode.min.js` | Génération de QR code embarquée (hors-ligne) |
| `manifest.webmanifest` | Manifest PWA |
| `sw.js` | Service worker (cache hors-ligne) |
| `icon-192.png` / `icon-512.png` | Icônes PWA |

## Déploiement

Site statique servi par **GitHub Pages** depuis la racine de la branche `main`.
Tout commit poussé sur `main` met le site à jour automatiquement.

## Feuille de route

- [x] Modèles, typos, logo (étape 1)
- [x] Placement libre des éléments sur la carte imprimable
- [ ] Fond d'écran portrait pour téléphone avec QR (étape 2)
- [ ] Parcours simplifié en 3 écrans + marque neutre (étape 3)
