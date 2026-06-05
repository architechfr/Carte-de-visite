# Carte de visite numérique — Cadence Architectes

Générateur de carte de visite numérique (PWA) pour les personnels de **Cadence Architectes**.

🔗 **En ligne :** https://architechfr.github.io/Carte-de-visite/

## Fonctionnalités

- **Éditeur live** : photo, identité, fonction, entreprise, coordonnées, réseaux sociaux, couleur de thème.
- **Aperçu instantané** de la carte.
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

- [ ] Aligner la charte sur l'identité Cadence / AXION (bleu nuit + or).
- [ ] Intégration dans le portail **AXION** comme module pour les personnels Cadence.

---
*Cadence Architectes Associés · Paris 12e*
