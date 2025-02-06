import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './', // Path to your Next.js project root
});

const customJestConfig = {
  setupFilesAfterEnv: ['./jest.setup.ts'], // Runs setup before tests
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@/components/(.*)$': './src/app/components/$1', // Handle absolute imports
    '^@/styles/(.*)$': './src/app/styles/$1',
  },
};

export default createJestConfig(customJestConfig);
