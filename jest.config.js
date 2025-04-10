module.exports = {
  moduleNameMapper: {
    "^components/(.*)$": "<rootDir>/src/components/$1",
    "^data/(.*)$": "<rootDir>/src/data/$1",
    "^assets/(.*)$": "<rootDir>/src/assets/$1",
    "\\.(css|scss)$": "identity-obj-proxy",
    "\\.(png|jpg|jpeg|gif|svg)$": "<rootDir>/__mocks__/fileMock.js",
    "^AppProvider$": "<rootDir>/src/AppProvider.jsx",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
};
