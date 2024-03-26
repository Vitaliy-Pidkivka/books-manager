module.exports = {
  roots: ["<rootDir>/src"],
  testMatch: ["**/__tests__/**/*.+(ts|tsx|js)", "**/?(*.)+(spec|test).+(ts|tsx|js)"],
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
  modulePaths: ["<rootDir>/src"],
  testEnvironment: "jsdom",
}
