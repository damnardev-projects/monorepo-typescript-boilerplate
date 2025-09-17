import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import globals from 'globals';

const commonTypescriptRules = {
    ...typescriptEslint.configs.recommended.rules,
    '@typescript-eslint/no-unused-vars': ['error', {args: 'none'}],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/consistent-type-imports': 'warn',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/prefer-readonly': 'warn',
    '@typescript-eslint/array-type': ['error', {default: 'array-simple'}],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/member-ordering': 'warn',
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/require-await': 'warn',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/naming-convention': [
        'error',
        {
            selector: 'variableLike',
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        },
        {
            selector: 'typeLike',
            format: ['PascalCase'],
        },
    ],
    'no-unused-vars': 'off',
    'prefer-const': 'error',
    'no-var': 'error',
    'no-duplicate-imports': 'error',
    eqeqeq: ['error', 'always'],
    yoda: 'error',
    curly: ['error', 'all'],
    'no-nested-ternary': 'warn',
    'no-unneeded-ternary': 'error',
    'no-lonely-if': 'error',
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'no-new-func': 'error',
    'no-script-url': 'error',
    'no-prototype-builtins': 'off',
    'prefer-promise-reject-errors': 'error',
    'no-throw-literal': 'error',
    'no-console': 'warn',
    'prefer-template': 'error',
    'object-shorthand': 'error',
    'prefer-arrow-callback': 'error',
    'max-len': ['warn', {code: 120, ignoreUrls: true}],
    'no-multiple-empty-lines': ['error', {max: 2}],
    'spaced-comment': ['error', 'always'],
    'prefer-destructuring': ['warn', {object: true, array: false}],
    'prefer-spread': 'error',
    'prefer-exponentiation-operator': 'error',
    'no-useless-return': 'error',
    'no-useless-concat': 'error',
    'no-useless-computed-key': 'error',
};

export default [
    {
        ignores: [
            'node_modules/**',
            '**/dist/**',
            '**/out/**',
            '**/coverage/**',
            '**/*.test.{ts,tsx}',
        ],
    },
    {
        files: ['packages/common/src/**/*.{ts,tsx}'],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                ecmaVersion: 2022,
                sourceType: 'module',
                project: ['packages/common/tsconfig.json'],
                tsconfigRootDir: import.meta.dirname,
            },
            globals: {
                ...globals.node,
                ...globals.browser,
            },
        },
        plugins: {
            '@typescript-eslint': typescriptEslint,
        },
        rules: commonTypescriptRules,
    },
    {
        files: ['packages/cli/src/**/*.{ts,tsx}'],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                ecmaVersion: 2022,
                sourceType: 'module',
                project: ['packages/cli/tsconfig.json'],
                tsconfigRootDir: import.meta.dirname,
            },
            globals: {
                ...globals.node,
                ...globals.browser,
            },
        },
        plugins: {
            '@typescript-eslint': typescriptEslint,
        },
        rules: commonTypescriptRules,
    },
];