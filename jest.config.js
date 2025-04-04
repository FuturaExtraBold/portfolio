module.exports = {
  moduleNameMapper: {
    "^components/(.*)$": "<rootDir>/src/components/$1",
    "\\.(css|scss)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
};
