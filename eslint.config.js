const eslintPluginPrettier = require('eslint-plugin-prettier');
const eslintPluginTypeScript = require('@typescript-eslint/eslint-plugin');
const eslintParserTypeScript = require('@typescript-eslint/parser');

module.exports = {
    files: ['*.js', '*.ts'],
    languageOptions: {
        parser: eslintParserTypeScript,
        ecmaVersion: 12,
        sourceType: 'module',
        globals: {
            browser: true,
            es2021: true,
            node: true,
            jest: true,
        },
    },
    ignores: ['dist', 'node_modules'],
    plugins: {
        prettier: eslintPluginPrettier,
        '@typescript-eslint': eslintPluginTypeScript,
    },
    rules: {
        'prettier/prettier': [
            'off',
            {
                bracketSpacing: true,
            },
        ],
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: 'next',
            },
        ],
        'no-unused-vars': [
            'error',
            {
                argsIgnorePattern: 'next',
            },
        ],
        camelcase: 'warn',
        'prefer-const': 'error',
        'no-const-assign': 'error',
        'no-console': 'warn',
        'no-alert': 'error',
        'no-multi-spaces': 'error',
        '@typescript-eslint/no-var-requires': 'off',
        eqeqeq: 'error',
        quotes: [
            'error',
            'single',
            {
                allowTemplateLiterals: true,
            },
        ],
        'no-self-compare': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-nested-ternary': 'warn',
        'no-constructor-return': 'error',
        'no-shadow': 'error',
        'no-var': 'error',
        '@typescript-eslint/explicit-function-return-type': 'error',
        'no-duplicate-imports': 'warn',
        curly: 'warn',
        'no-empty-function': 'warn',
        'no-lonely-if': 'warn',
        'array-bracket-spacing': ['warn', 'never'],
        'arrow-spacing': 'warn',
        'comma-spacing': [
            'warn',
            {
                before: false,
                after: true,
            },
        ],
        'func-call-spacing': ['warn', 'never'],
        'key-spacing': [
            'warn',
            {
                beforeColon: false,
                afterColon: true,
                mode: 'strict',
            },
        ],
        'max-statements-per-line': [
            'warn',
            {
                max: 1,
            },
        ],
        'object-property-newline': [
            'warn',
            {
                allowAllPropertiesOnSameLine: true,
            },
        ],
        'semi-spacing': [
            'warn',
            {
                before: false,
                after: true,
            },
        ],
        'space-before-function-paren': [
            'warn',
            {
                asyncArrow: 'always',
                anonymous: 'never',
                named: 'never',
            },
        ],
        'space-in-parens': ['warn', 'never'],
        'switch-colon-spacing': [
            'warn',
            {
                after: true,
                before: false,
            },
        ],
    },
};
