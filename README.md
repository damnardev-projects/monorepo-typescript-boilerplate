# TypeScript Monorepo Boilerplate

[![en](https://img.shields.io/badge/lang-en-blue.svg)](README.md)
[![fr](https://img.shields.io/badge/lang-fr-blue.svg)](README.fr.md)

## Introduction

TypeScript Monorepo Boilerplate is a ready-to-use setup providing a streamlined foundation for developing TypeScript applications in a monorepo architecture. This project includes comprehensive tooling with ESLint for linting, Vitest for testing, SonarQube for code analysis, and a demo console application.

### Features

- **Monorepo Architecture**: Manage multiple packages in a single repository
- **Console Application**: CLI demo project
- **SonarQube**: Code quality analysis

### Main Versions

- **TypeScript**: 5.9.3
- **ESLint**: 9.37.0
- **Vitest**: 3.2.4

### Project Structure

```text
.
├── .github/
│   └── workflows/          # GitHub Actions workflows
├── packages/
│   ├── cli/               # Console application
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── src/
│   │       └── index.ts
│   └── common/            # Shared utilities
│       ├── package.json
│       ├── tsconfig.json
│       ├── vitest.config.ts
│       └── src/
│           ├── index.ts
│           └── index.test.ts
├── eslint.config.mjs      # ESLint configuration
├── package.json           # Main workspace configuration
├── sonar-project.properties # SonarQube configuration
├── tsconfig.base.json     # Base TypeScript configuration
└── README.md              # This file
```

### Prerequisites

Before using this TypeScript boilerplate, make sure you have the following tools installed:

- **Node.js**: JavaScript runtime (version 18 or higher recommended)

## Usage

### Installation

1. Clone this repository to your local machine:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd monorepo-typescript-boilerplate
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Configuration

This project does not require any environment variables by default. All configurations are included in the project files.

For SonarQube, create a `.env` file if you want to use code analysis:
```bash
cp .env.example .env
```

### Running the Project

Use the following npm commands to manage your project:

| Command | Description |
|----------|-------------|
| `npm install` | Install all workspace dependencies |
| `npm run build` | Compile all TypeScript packages |
| `npm run test` | Run all tests with Vitest |
| `npm run start` | Start the CLI console application |
| `npm run lint` | Check code quality with ESLint |
| `npm run clean` | Clean generated build files |
| `npm run sonar` | Run SonarQube analysis (requires config) |
