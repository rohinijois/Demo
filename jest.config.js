/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  transform: {
    "\\.ts$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.test.json",
      },
    ],
  },
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["<rootDir>/src/**/*.spec.ts"],
};
