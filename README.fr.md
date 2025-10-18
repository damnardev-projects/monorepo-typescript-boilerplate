# TypeScript Monorepo Boilerplate

[![en](https://img.shields.io/badge/lang-en-blue.svg)](README.md)
[![fr](https://img.shields.io/badge/lang-fr-blue.svg)](README.fr.md)

## Introduction

TypeScript Monorepo Boilerplate est une configuration prête à l'emploi qui fournit une base rationalisée pour développer des applications TypeScript dans une architecture monorepo. Ce projet inclut un outillage complet avec ESLint pour le linting, Vitest pour les tests, SonarQube pour l'analyse de code, et une application console de démonstration.

### Fonctionnalités

- **Architecture Monorepo** : Gestion de plusieurs packages dans un seul dépôt
- **Application Console** : Projet de démonstration CLI
- **SonarQube** : Analyse de qualité de code

### Versions Principales

- **TypeScript**: 5.9.3
- **ESLint**: 9.38.0
- **Vitest**: 3.2.4

### Structure du Projet

```text
.
├── .github/
│   └── workflows/          # Workflows GitHub Actions
├── packages/
│   ├── cli/               # Application console
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── src/
│   │       └── index.ts
│   └── common/            # Utilitaires partagés
│       ├── package.json
│       ├── tsconfig.json
│       ├── vitest.config.ts
│       └── src/
│           ├── index.ts
│           └── index.test.ts
├── eslint.config.mjs      # Configuration ESLint
├── package.json           # Configuration du workspace principal
├── sonar-project.properties # Configuration SonarQube
├── tsconfig.base.json     # Configuration TypeScript de base
└── README.fr.md          # Ce fichier
```

### Prérequis

Avant d'utiliser ce boilerplate TypeScript, assurez-vous d'avoir les outils suivants installés :

- **Node.js** : Runtime JavaScript (version 18 ou supérieure recommandée)

## Utilisation

### Installation

1. Clonez ce dépôt sur votre machine locale :
   ```bash
   git clone <url-du-depot>
   ```
2. Naviguez vers le répertoire du projet :
   ```bash
   cd monorepo-typescript-boilerplate
   ```
3. Installez les dépendances :
   ```bash
   npm install
   ```

### Configuration

Ce projet ne nécessite aucune variable d'environnement pour fonctionner de base. Toutes les configurations sont incluses dans les fichiers du projet.

Pour SonarQube, créez un fichier `.env` si vous souhaitez utiliser l'analyse de code :
```bash
cp .env.example .env
```

### Exécution du Projet

Utilisez les commandes npm suivantes pour gérer votre projet :

| Commande | Description |
|----------|-------------|
| `npm install` | Installer toutes les dépendances du workspace |
| `npm run build` | Compiler tous les packages TypeScript |
| `npm run test` | Exécuter tous les tests avec Vitest |
| `npm run start` | Démarrer l'application console CLI |
| `npm run lint` | Vérifier la qualité du code avec ESLint |
| `npm run clean` | Nettoyer les fichiers de build générés |
| `npm run sonar` | Lancer l'analyse SonarQube (nécessite configuration) |
