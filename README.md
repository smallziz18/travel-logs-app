# 🌍 Travel Logs

Une application web élégante pour documenter et partager vos aventures autour du monde. Créez des journaux de voyage détaillés avec photos, localisations précises et souvenirs personnels.

## ✨ Fonctionnalités

- 🔐 **Authentification GitHub** simple et sécurisée
- 🗺️ **Gestion des destinations** avec coordonnées géographiques
- 📝 **Journaux de voyage** détaillés pour chaque lieu visité
- 📸 **Galerie d'images** pour immortaliser vos souvenirs
- 🌓 **Mode jour/nuit** pour une expérience de lecture confortable
- 📱 **Interface responsive** avec DaisyUI

## 🛠️ Technologies utilisées

- [Nuxt 4](https://nuxt.com/) - Framework Vue.js moderne
- [Vue 3](https://vuejs.org/) - Framework JavaScript progressif
- [TypeScript](https://www.typescriptlang.org/) - Pour un code robuste et typé
- [Pinia](https://pinia.vuejs.org/) - Gestion d'état intuitive
- [Tailwind CSS](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/) - Design élégant
- [Better Auth](https://better-auth.com/) - Système d'authentification flexible
- [Turso](https://turso.tech/) - Base de données SQLite distribuée
- [Drizzle ORM](https://orm.drizzle.team/) - ORM moderne pour TypeScript

## 🚀 Installation

### Prérequis

- Node.js (v18+)
- npm

### Mise en route

1. Clonez le dépôt

   ```bash
   git clone https://github.com/votre-username/travel-logs.git
   cd travel-logs
   ```

2. Installez les dépendances

   ```bash
   npm install
   ```

3. Configurez les variables d'environnement
   Créez un fichier `.env` à la racine du projet:
   ```
   TURSO_AUTH_TOKEN=votre_token_turso
   TURSO_DATABASE_URL=votre_url_database
   BETTER_AUTH_SECRET=votre_secret
   BETTER_AUTH_URL=http://localhost:3000
   AUTH_GITHUB_CLIENT_ID=votre_client_id
   AUTH_GITHUB_CLIENT_SECRET=votre_client_secret
   ```

## 💻 Développement

Lancez le serveur de développement avec la base de données locale:

```bash
npm run dev
```

L'application sera accessible sur `http://localhost:3000`

## 🏗️ Production

Construisez l'application pour la production:

```bash
npm run build
```

Prévisualisez la version de production:

```bash
npm run preview
```

## 📂 Structure du projet

- `/app` - Composants Vue, pages et layouts
- `/lib/db` - Schémas de base de données et migrations
- `/lib/auth` - Configuration de l'authentification
- `/server` - API et endpoints Nuxt

## 📚 Modèle de données

L'application utilise plusieurs tables pour stocker:

- Utilisateurs et authentification
- Destinations (localisations)
- Journaux de voyage
- Images associées aux journaux

## 🧰 Scripts disponibles

- `npm run dev` - Démarre l'environnement de développement complet
- `npm run build` - Construit l'application pour la production
- `npm run lint` - Vérifie le code avec ESLint
- `npm run lint:fix` - Corrige automatiquement les problèmes de style de code

## 🤝 Contribution

Les contributions sont les bienvenues! N'hésitez pas à ouvrir une issue ou proposer une pull request.

## 📝 Licence

[MIT](LICENSE)
