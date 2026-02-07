import type { Config } from "jest";

const config: Config = {
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

    collectCoverage: true,
    collectCoverageFrom: [
        "src/**/*.{ts,tsx}",
        "!src/**/*.d.ts",
        "!src/**/index.ts",
        "!src/app/**",
    ],

    coverageDirectory: "coverage",

    coverageReporters: [
        "text",
        "text-summary",
        "html",
        "lcov",
    ],

    coverageThreshold: {
        global: {
            statements: 80,
            branches: 70,
            functions: 80,
            lines: 80,
        },
    },

    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },

    transform: {
        "^.+\\.(ts|tsx)$": [
            "ts-jest",
            { tsconfig: "<rootDir>/tsconfig.json" },
        ],
    },

    testPathIgnorePatterns: ["/node_modules/", "/.next/"],
};

export default config;
