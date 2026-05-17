# DAILY CODING CHALLENGES

Ce projet est un laboratoire d'Ingénieur Frontend. C'est ici que je prototype, teste et documente des concepts avancés. Nous toucherons aux principes fondamentaux de Javascript, à l'optimisation de code, l'expérience utilisateur et à la Cybersécurité. 

Les stacks utilisés pour ce projet sont React, TypeScript, Vite et Tailwind CSS. 


![Aperçu du site](./public/preview-codinglab.gif)

---

## npm Packages

  --> npm create vite@latest daily-coding-challenges -- --template react-ts
  --> npm install
  --> npm install lucide react
  --> npm install tailwindcss @tailwindcss/vite 
    |
    |
      --> config vite.config.ts 

        import { defineConfig } from 'vite'
        import tailwindcss from '@tailwindcss/vite'
        export default defineConfig({
          plugins: [
            tailwindcss(),
          ],
        })

    |
    |
      --> import tailwind css 
        @import "tailwindcss";

  --> npm run dev

## 🛠 Stack Technique

      Framework : React 18/19 avec Vite

      Langage : TypeScript (Type-safety & Robustesse)

      Styling : Tailwind CSS (UI rapide et consistante)

      Animation : Framer Motion / Lenis (Micro-interactions UX)

## 🏛 Structure du Labo
  Le projet est organisé par modules de compétences pour faciliter la navigation :

      src/
      ├── home/
      │   ├── BackgroundCanvas.tsx # Canvas Fond animé Gsap
      │   ├── HeaderTitle.tsx #Titre animé avec GSAP intégré au canvas
      │   ├── ScrollText.tsx  #Texte de présentation animé avec GSAP
      │   ├── DynamicTweens.tsx #Cartes projets avec effet au clique 
      ├── labs/
      │   ├── security-tests/      # Prototypes de défense (XSS, CSRF, Sanitization)
      │   ├── ux-animations/      # Focus Accessibilité, Fluidité & Animations
      │   ├── javascript-tests/       # Logique JavaScript, Manipulation du DOM natif & Web APIs
    


## 🧪 Modules de Recherche

  ### 🛡️ Cybersécurité (Frontend Security)

      Validation de Schémas : Utilisation de Zod pour valider les entrées utilisateurs.

      Protection XSS : Mise en place de politiques de nettoyage de données (Sanitization).

      Auth Patterns : Gestion sécurisée des tokens et des sessions côté client.

  ### ✨ UX/UI & Performance

      Core Web Vitals : Optimisation du LCP et du CLS.

      A11y (Accessibilité) : Respect des normes WCAG, gestion du focus et compatibilité lecteurs d'écran.

      Interactions fluides : Mise en œuvre de "Scroll Snapping" et transitions intelligentes.

  ### ⚙️ Engineering & DOM

      Custom Hooks : Création de hooks réutilisables pour simplifier la logique complexe.

      Web Workers : Déportation de calculs lourds pour ne pas bloquer le thread principal.


## 🧪 Modules de Recherche

  ### 🛡️ Cybersécurité (Frontend Security)
  *   **Validation de Schémas :** Utilisation de `Zod` pour valider les entrées utilisateurs.
  *   **Protection XSS :** Mise en place de politiques de nettoyage de données (Sanitization).
  *   **Auth Patterns :** Gestion sécurisée des tokens et des sessions côté client.

  ### ✨ UX/UI & Performance
  *   **Core Web Vitals :** Optimisation du LCP et du CLS.
  *   **A11y (Accessibilité) :** Respect des normes WCAG, gestion du focus et compatibilité lecteurs d'écran.
  *   **Interactions fluides :** Mise en œuvre de "Scroll Snapping" et transitions intelligentes.

  ### ⚙️ Engineering & DOM
  *   **Custom Hooks :** Création de hooks réutilisables pour simplifier la logique complexe.
  *   **Web Workers :** Déportation de calculs lourds pour ne pas bloquer le thread principal.

---

## 🚀 Installation & Lancement

1. **Cloner le projet :**
   ```bash
   git clone [https://github.com/douniacodes/daily-coding-challenges.git](https://github.com/douniacodes/daily-coding-challenges.git)

2. **Installer les dépendances :

Bash
npm install

3. **Lancer le labo :

Bash
npm run dev

  ### [Journal d'apprentissage (Log)]
  
  [13.05.26] : Création du labo, de la page d'accueil (home) et configurations basiques. La configuration de Tailwind CSS sera à retravailler prochainement.


## 📬 Contact

Dounia Boukrim

LinkedIn (www.linkedin.com/in/dounia-b-353b72367) | Portfolio (https://www.douniacodes.com/) | Github (https://github.com/douniacodes)
