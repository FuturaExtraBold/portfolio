module.exports = {
  moduleNameMapper: {
    "^assets/(.*)$": "<rootDir>/src/assets/$1",
    "^data/(.*)$": "<rootDir>/src/data/$1",
    "^features/(.*)$": "<rootDir>/src/features/$1",
    "^hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "^layout/(.*)$": "<rootDir>/src/layout/$1",
    "^layout$": "<rootDir>/src/layout/$1",
    "^providers/(.*)$": "<rootDir>/src/providers/$1",
    "^ui/(.*)$": "<rootDir>/src/ui/$1",
    "^ui$": "<rootDir>/src/ui/$1",
    "^utils/(.*)$": "<rootDir>/src/utils/$1",
    "\\.(css|scss)$": "identity-obj-proxy",
    "\\.(png|jpg|jpeg|gif|svg)$": "<rootDir>/__mocks__/fileMock.js",
    "^AppProvider$": "<rootDir>/src/providers/AppProvider.jsx",
  },
  setupFilesAfterEnv: [
    "<rootDir>/jest.setup.js",
    "<rootDir>/src/setupTests.ts",
  ],
  testEnvironment: "jest-environment-jsdom",
};
