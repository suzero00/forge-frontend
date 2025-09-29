import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginReact from 'eslint-plugin-react';

export default defineConfig([
    {
        files: ['**/*.{js,ts,jsx,tsx}'],
        plugins: { js, prettier: pluginPrettier, react: pluginReact },
        extends: ['js/recommended', 'plugin:i18next/recommended'],
        languageOptions: { globals: globals.browser },
        rules: {
            'object-curly-spacing': ['error', 'always'],
            'react/jsx-indent': [2, 4],
            'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
            'prettier/prettier': 'error',
            'react/react-in-jsx-scope': 'off',
            'i18next/no-literal-string': ['error', { markupOnly: true }],
        },
        settings: {
            react: {
                version: 'detect',
                runtime: 'automatic',
            },
        },
    },
    tseslint.configs.recommended,
]);
