import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    testEnvironment: 'node',
    roots: ['<rootDir>/tests'],
    preset: 'ts-jest',
    transform: {
        '^.+\\.ts$': [
            'ts-jest',
            {
                tsconfig: '<rootDir>/tsconfig.jest.json',
            },
        ],
    },
    testRegex: '(/__tests__/.*|(\\.|/)test)\\.ts?$',
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/'],
    setupFiles: ['<rootDir>/jest/env-vars.ts'],
};

export default config;
