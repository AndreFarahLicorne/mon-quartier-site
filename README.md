# Mon Quartier — Site vitrine

Site vitrine pour **Mon Quartier**, un service de creation de jeux de plateau personnalises inspires du Monopoly. Construit avec [Astro](https://astro.build/) pour des performances et un SEO optimaux.

## Prerequis

- Node.js 18+
- npm

## Installation

```bash
npm install
```

## Developpement

```bash
npm run dev
```

Le site est accessible sur `http://localhost:4321`.

## Build production

```bash
npm run build
```

Les fichiers statiques sont generes dans `dist/`. Pour previsualiser le build :

```bash
npm run preview
```

## Deploiement

Le site est 100% statique (HTML/CSS/JS), deployable sur n'importe quel hebergeur :

- **Vercel** / **Netlify** : detection automatique d'Astro, aucune configuration necessaire
- **Hebergeur classique** : uploader le contenu du dossier `dist/`

## Structure du projet

```
src/
  layouts/
    Layout.astro          # Layout principal avec SEO, meta tags, JSON-LD
  components/
    Navbar.astro           # Navigation fixe avec menu burger mobile
    Hero.astro             # Section hero avec titre et CTA
    BoardMockup.astro      # Plateau de jeu visuel en CSS (11x11 cases)
    Concept.astro          # 6 cartes de presentation du concept
    Creations.astro        # Galerie de 4 exemples de realisations
    Steps.astro            # 4 etapes avec timeline visuelle
    Testimonials.astro     # 3 temoignages clients
    DevisForm.astro        # Formulaire de demande de devis
    Contact.astro          # Coordonnees, reseaux sociaux, FAQ
    Footer.astro           # Pied de page avec liens et mentions legales
  pages/
    index.astro            # Page d'accueil (assemble les composants)
  styles/
    global.css             # Styles complets avec responsive
public/
  robots.txt               # Directives pour les crawlers
  favicon.svg              # Favicon
```

## SEO integre

- **Meta tags** : title, description, canonical URL
- **Open Graph** : Facebook, LinkedIn (og:title, og:description, og:image)
- **Twitter Cards** : summary_large_image
- **Schema.org JSON-LD** :
  - `LocalBusiness` : nom, adresse, prix, contact
  - `FAQPage` : 4 questions frequentes (affichage enrichi dans Google)
- **Sitemap XML** : genere automatiquement par `@astrojs/sitemap`
- **robots.txt** : configure avec lien vers le sitemap
- **HTML semantique** : `<main>`, `<article>`, `<address>`, `<nav>`, `aria-label`
- **0 KB de JS par defaut** : Astro genere du HTML statique pur

## Personnalisation

### Contenu

- Modifier les textes directement dans les fichiers `.astro` du dossier `src/components/`
- Remplacer les coordonnees placeholder (email, telephone, adresse) dans `Contact.astro`
- Mettre a jour les liens reseaux sociaux dans `Contact.astro` et `Footer.astro`

### Design

- Couleurs et variables CSS dans `src/styles/global.css` (section `:root`)
- Palette principale : vert (`#2d6a4f`), orange CTA (`#e85d3a`), creme (`#faf6f1`)
- Polices : Fredoka (titres) + Inter (texte), chargees via Google Fonts

### Formulaire de devis

Le formulaire affiche un message de confirmation cote client. Pour recevoir les demandes par email, brancher un service backend :

- **Formspree** : ajouter `action="https://formspree.io/f/VOTRE_ID"` au `<form>`
- **Netlify Forms** : ajouter `netlify` au `<form>` (automatique sur Netlify)
- **API custom** : modifier le handler `submit` dans `src/pages/index.astro`

## Configuration Astro

```js
// astro.config.mjs
export default defineConfig({
    site: 'https://monquartier-jeu.fr',  // Remplacer par votre domaine
    integrations: [sitemap()],
    compressHTML: true,
});
```

Mettre a jour `site` avec votre nom de domaine pour que le sitemap et les URLs canoniques soient corrects.
